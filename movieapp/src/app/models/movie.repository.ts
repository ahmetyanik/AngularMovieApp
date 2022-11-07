import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'film 1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti excepturi accusantium laborum maiores similique accusamus consequuntur voluptatum possimus commodi, adipisci cupiditate vero fugit eum voluptatibus earum hic numquam porro.',
        imageUrl: '1.jpeg',
        isPopular: true,
        datePublished: new Date(1990, 11, 10),
      },
      {
        id: 2,
        title: 'film 2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti excepturi accusantium laborum maiores similique accusamus consequuntur voluptatum possimus commodi, adipisci cupiditate vero fugit eum voluptatibus earum hic numquam porro.',
        imageUrl: '2.jpeg',
        isPopular: true,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 3,
        title: 'film 3',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti excepturi accusantium laborum maiores similique accusamus consequuntur voluptatum possimus commodi, adipisci cupiditate vero fugit eum voluptatibus earum hic numquam porro.',
        imageUrl: '3.jpeg',
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 4,
        title: 'film 4',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti excepturi accusantium laborum maiores similique accusamus consequuntur voluptatum possimus commodi, adipisci cupiditate vero fugit eum voluptatibus earum hic numquam porro.',
        imageUrl: '4.jpeg',
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id == id);
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular);
  }
}
