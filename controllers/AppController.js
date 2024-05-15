import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(request, response) {
    response.status(200).json({ redis: redisClient.isAlive(), db: dbClient.isAlive() });
  }

  static async getStats(request, response) {
    const user_number = await dbClient.nbUsers();
    const file_number = await dbClient.nbFiles();
    response.status(200).json({ users: user_number, files: file_number });
  }
}

module.exports = AppController;