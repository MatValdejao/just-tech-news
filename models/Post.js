const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create post model
class Post extends Model {
	static upvote(body, models) {
		return models.Vote.create({
			user_id: body.user_id,
			post_id: body.post_id,
		}).then(() => {
			return Post.findOne({
				where: {
					id: body.post_id,
				},
				attributes: [
					"id",
					"post_url",
					"title",
					"created_at",
					[
						sequelize.literal(
							`(SELECT COUNT(*) FROM vote WHERE post_id = vote.post_id)`
						),
						"vote_count",
					],
				],
			});
		});
	}
}

// create fields/columns for Post model
Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post_url: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isUrl: true,
			},
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id",
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "post",
	}
);

module.exports = Post;
