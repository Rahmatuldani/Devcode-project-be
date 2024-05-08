import { DataTypes, Model } from "sequelize";
import db from '../config/db';

class Activity extends Model {}

Activity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(191),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(191),
            allowNull: true,
        },
    },
    {
        sequelize: db,
        modelName: 'Activity'
    }
)

export default Activity;