import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Existe?
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);
    // se sim

    if (!transaction) {
      throw new AppError('Transaction does not exist');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
