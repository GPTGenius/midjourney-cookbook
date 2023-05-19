import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Midjourney Cookbook',
  description: 'More Magic Magination',
  base: '/midjourney-cookbook/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          {
            text: 'Human',
            items: [
              {
                text: 'Girl Flowers Car Colorful',
                link: '/human/girl_flowers_car_colorful',
              },
              {
                text: 'Girl Flowers Car White',
                link: '/human/girl_flowers_car_white',
              },
              {
                text: 'Boy Flowers Car Colorful',
                link: '/human/boy_flowers_car_colorful',
              },
              {
                text: 'Boy Flowers Car White',
                link: '/human/boy_flowers_car_white',
              },
              {
                text: 'Boy White Shirt Sea',
                link: '/human/boy_white_shirt_sea',
              },
              {
                text: 'Girl White Dress Sea',
                link: '/human/girl_white_dress_sea',
              },
              {
                text: 'Girl Flower Garden',
                link: '/human/girl_flower_garden',
              },
              {
                text: 'Two Girls Golden Hour',
                link: 'human/two_girls_golden_hour',
              },
              {
                text: 'Train Platform Human',
                link: 'human/train_platform_human_with_flowers',
              },
            ],
          },
          {
            text: 'Animal',
            items: [
              {
                text: 'Cat',
                link: '/animal/cat',
              },
            ],
          },
          // { text: 'Building' },
          {
            text: 'Game',
            items: [
              {
                text: 'Japanese Ryokan',
                link: '/game/japanese_ryokan',
              },
            ],
          },
          {
            text: 'Product',
            items: [
              {
                text: 'Bluetooth Audio',
                link: '/product/bluetooth_audio',
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/GPTGenius/midjourney-cookbook',
      },
    ],
  },
});
