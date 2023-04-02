// to generate fish data 48:00 https://up.htmlacademy.ru/ecmascript/17/module/2/item/6


const generateEmotions = () => {
  const emotions = [
    'smile',
    'sleeping',
    'puke',
    'angry'
  ];
  return emotions;
};

export const generateTask = () => ({
  emotion : generateEmotions(),
  comment : {
    'id': '42',
    'author': 'Ilya O\'Reilly',
    'comment': 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    'date': '2019-05-11T16:12:32.554Z',
    'emotion': 'smile'
  },
  Movie : {
    'id': '0',
    // 'comments': [
    //   // eslint-disable-next-line no-undef
    //   $Comment.id$, $Comment.id$
    // ],
    'film_info': {
      'title': 'A Little Pony Without The Carpet',
      'alternative_title': 'Laziness Who Sold Themselves',
      'total_rating': 5.3,
      'poster': 'images/posters/blue-blazes.jpg',
      'age_rating': 0,
      'director': 'Tom Ford',
      'writers': [
        'Takeshi Kitano'
      ],
      'actors': [
        'Morgan Freeman'
      ],
      'release': {
        'date': '2019-05-11T00:00:00.000Z',
        'release_country': 'Finland'
      },
      'runtime': 77,
      'genre': [
        'Comedy'
      ],
      'description': 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    'user_details': {
      'watchlist': false,
      'already_watched': true,
      'watching_date': '2019-04-12T16:12:32.554Z',
      'favorite': false
    }}
});


