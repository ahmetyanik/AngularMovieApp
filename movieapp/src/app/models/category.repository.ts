import { Category } from './category';
export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      { id: 1, name: 'macera' },
      { id: 2, name: 'romantik' },
      { id: 3, name: 'dram' },
      { id: 4, name: 'bilim kurgu' },
    ];
  }

  getCategories():Category[]{
    return this.categories;
  }

}
