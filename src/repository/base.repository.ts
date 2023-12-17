import {Repository} from 'typeorm';

export interface IRepository<TKey, TDto> {
  Create(id: TKey, dto: TDto): Promise<string>;
  Update(id: TKey, dto: TDto): Promise<string>;
  Delete(id: TKey): Promise<boolean>;
  ReadAll(): Promise<TDto[]>;
  ReadOne(id: TKey): Promise<TDto>;
}

export class BaseRepository<TKey, TEntity, TDto>
  implements IRepository<TKey, TDto>
{
  Create(id: TKey, dto: TDto): Promise<string> {
    throw new Error('Method not implemented.');
  }
  Update(id: TKey, dto: TDto): Promise<string> {
    throw new Error('Method not implemented.');
  }
  Delete(id: TKey): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  ReadAll(): Promise<TDto[]> {
    throw new Error('Method not implemented.');
  }
  ReadOne(id: TKey): Promise<TDto> {
    throw new Error('Method not implemented.');
  }
}
