let pizzaJson = [
    {
        id: 1,
        name: 'Faca Gut Hook',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxM08i_k4WZqPjmMrXWk1Rd4cJ5nqeVoNWljAe18kVqZWigIdOQdldoYlrY_wLsw-3ohZG76s7PyiZnsiZw-z-DyMIysFMK/512fx512f',
        price: [11.53, 43.75, 525.00],
        sizes: [
          'R$ 11,53',
          'R$ 43,75',
          'pro'
        ],
        description: 'Faca Gut Hook (★) | Dente de Tigre'
      },
      {
        id: 2,
        name: 'AK-47',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924lZKIn-7LP7LWnn8fvsAo0u-R9trzi1bs-hI9NjqiJIXGdwBrNAzW8li4w7jqhcW16cvAzWwj5HdQlBgtMw/512fx512f',
        price: [3.20, 8.80, 105.67],
        sizes: [
          'R$ 3,20',
          'R$ 8,80',
          'pro'
        ],
        description: 'Revolução Neon 2º coleção gama rifle oculto'
      },
      {
        id: 3,
        name: 'Luvas Faixa 🔥  ',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fpyi_zV_IP7t1yxqgUlfWzxcdTAdAM-ZlrSr1a3l7_vhMe_tM7KwSZj7nEmsCzenhKyhhwYarBxxavJDxEXxA0/512fx512f',
        price: [20.45, 79.16, 950.00],
        sizes: [
          'R$ 20,45',
          'R$ 79,16',
          'pro'
        ],
        description: 'Luvas (★ e Extraordinário) '
      },
      {
        id: 4,
        name: 'Desert Eagle 🔥',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XVkjoFuMYiiLqUrI-k3le3r0s5amj7d9eTI1I-M1rW-Fm_xO-50Jfvot2XnhS4_w8U/512fx512f',
        price: [56.19, 218.00, 2620,00],
        sizes: [
          'R$ 56,19',
          'R$ 218,00',
          'pro'
        ],
        description: 'Chamas Nova de Fábrica Restrito Coleção Dust'
      },
      {
        id: 5,
        name: 'UMP-45 Degradê',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0vL3dzxG6eOjmZC0m_7zO6-fzm0H68Ek3OyUpdug3QThrko_MT2iLYHAdQRsMFzZ8lK5kO_o157qu4OJlyWbaUQyXA/512fx512f',
        price: [21.06, 76.25, 915.00],
        sizes: [
          'R$ 21,06',
          'R$ 76,25',
          'pro'
        ],
        description: 'UMP-45 Submetralhadora (Secreto) A Coleção Dust 2 de 2021'
      },
      {
        id: 6,
        name: 'Faca Talon',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfxPrMfipP7dezhr-YmMjkJqnBmm5u5cB1g_zMu9ug2ACw-UVqN2v1ddKUcARrNwrW-wXoybrmjJC9uJTJzXJqvXYjtnbD30vgkeP88HQ/512fx512f',
        price: [110.25, 434.00, 5214.00],
        sizes: [
          'R$ 110,25',
          'R$ 434,00',
          'pro'
        ],
        description: 'Faca Talon (★) | Ultravioleta'
      },
      {
        id: 7,
        name: 'Luvas Faixa',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8jyMrnDn2hu4MpkhO3S4YP6nFyLpAE9PT6mS9vAJl97PEbS-1G5xO2-05a_u8zOnHJrvSMh4HjanhbhgBFIa7BngvOdHV-bVvRMAuDcUantVxYe/512fx512f',
        price: [7.80, 27.08, 325.00],
        sizes: [
          'R$ 7,80',
          'R$ 27,08',
          'pro'
        ],
        description: 'Faixas (★) | Shemagh Laranja Testada em Campo Extraordinári'
      },
      {
        id: 8,
        name: 'AK-47',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV09K_k4ifgP7nO4Tdn2xZ_Ishib2Urd33jQTt_xZuMT30J4THJ1U_aQ2CrgDqw7johMS9vJzBmCRhpGB8sq3xhCxI/512fx512f',
        price: [18.75, 69.00, 828.00],
        sizes: [
          'R$ 18,75',
          'R$ 69,00',
          'pro'
        ],
        description: 'Desejo Noturno Oculto Coleção dos Sonhos e Pesadelos'
      },
      {
        id: 9,
        name: 'Cano Curto🔥',
        img: 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopbuyLgNv1fX3cih9_92hkYSEkfHLOLLChWde_sBOhuDG_Zi73QGwqENrNWn0J9OdIQNtNF7VrFO_lOq515O1uZrPy3c36CdwtH3bmQv3309EdMFmBQ/512fx512f',
        price: [14.70, 52.98, 635.80],
        sizes: [
          'R$ 14,70',
          'R$ 52,98',
          'pro'
        ],
        description: 'Kiss♥Love Pouco Usada Secreto The Recoil Collection' 
      }
];