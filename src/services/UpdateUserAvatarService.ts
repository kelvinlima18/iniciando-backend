import { getRepository } from 'typeorm';

import User from '../models/User';

interface RequestDTO {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: RequestDTO): Promise<void> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);
  }
}

export default UpdateUserAvatarService;
