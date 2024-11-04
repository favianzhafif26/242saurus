import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/242saurus/blog',
    component: ComponentCreator('/242saurus/blog', '760'),
    exact: true
  },
  {
    path: '/242saurus/blog/archive',
    component: ComponentCreator('/242saurus/blog/archive', 'd4f'),
    exact: true
  },
  {
    path: '/242saurus/blog/authors',
    component: ComponentCreator('/242saurus/blog/authors', '735'),
    exact: true
  },
  {
    path: '/242saurus/blog/authors/adiieeee',
    component: ComponentCreator('/242saurus/blog/authors/adiieeee', 'c21'),
    exact: true
  },
  {
    path: '/242saurus/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/242saurus/blog/authors/all-sebastien-lorber-articles', 'fcc'),
    exact: true
  },
  {
    path: '/242saurus/blog/authors/favianzhafif-26',
    component: ComponentCreator('/242saurus/blog/authors/favianzhafif-26', '917'),
    exact: true
  },
  {
    path: '/242saurus/blog/authors/yangshun',
    component: ComponentCreator('/242saurus/blog/authors/yangshun', '421'),
    exact: true
  },
  {
    path: '/242saurus/blog/first-blog-post',
    component: ComponentCreator('/242saurus/blog/first-blog-post', '3db'),
    exact: true
  },
  {
    path: '/242saurus/blog/long-blog-post',
    component: ComponentCreator('/242saurus/blog/long-blog-post', 'b29'),
    exact: true
  },
  {
    path: '/242saurus/blog/mdx-blog-post',
    component: ComponentCreator('/242saurus/blog/mdx-blog-post', '31a'),
    exact: true
  },
  {
    path: '/242saurus/blog/POP-QUIZ',
    component: ComponentCreator('/242saurus/blog/POP-QUIZ', '167'),
    exact: true
  },
  {
    path: '/242saurus/blog/tags',
    component: ComponentCreator('/242saurus/blog/tags', 'eec'),
    exact: true
  },
  {
    path: '/242saurus/blog/tags/docusaurus',
    component: ComponentCreator('/242saurus/blog/tags/docusaurus', '855'),
    exact: true
  },
  {
    path: '/242saurus/blog/tags/facebook',
    component: ComponentCreator('/242saurus/blog/tags/facebook', 'be7'),
    exact: true
  },
  {
    path: '/242saurus/blog/tags/hello',
    component: ComponentCreator('/242saurus/blog/tags/hello', '9a3'),
    exact: true
  },
  {
    path: '/242saurus/blog/tags/hola',
    component: ComponentCreator('/242saurus/blog/tags/hola', '777'),
    exact: true
  },
  {
    path: '/242saurus/blog/tags/popquiz',
    component: ComponentCreator('/242saurus/blog/tags/popquiz', '15d'),
    exact: true
  },
  {
    path: '/242saurus/blog/tags/week-07',
    component: ComponentCreator('/242saurus/blog/tags/week-07', 'bdb'),
    exact: true
  },
  {
    path: '/242saurus/blog/welcome',
    component: ComponentCreator('/242saurus/blog/welcome', 'c00'),
    exact: true
  },
  {
    path: '/242saurus/markdown-page',
    component: ComponentCreator('/242saurus/markdown-page', '8ba'),
    exact: true
  },
  {
    path: '/242saurus/docs',
    component: ComponentCreator('/242saurus/docs', '1e0'),
    routes: [
      {
        path: '/242saurus/docs',
        component: ComponentCreator('/242saurus/docs', 'e1f'),
        routes: [
          {
            path: '/242saurus/docs',
            component: ComponentCreator('/242saurus/docs', 'e43'),
            routes: [
              {
                path: '/242saurus/docs/category/tutorial---basics',
                component: ComponentCreator('/242saurus/docs/category/tutorial---basics', '75e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/category/tutorial---extras',
                component: ComponentCreator('/242saurus/docs/category/tutorial---extras', '9d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/intro',
                component: ComponentCreator('/242saurus/docs/intro', 'e34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/242saurus/docs/tutorial-basics/congratulations', '11a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/242saurus/docs/tutorial-basics/create-a-blog-post', '700'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/242saurus/docs/tutorial-basics/create-a-document', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/242saurus/docs/tutorial-basics/create-a-page', '5d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/242saurus/docs/tutorial-basics/deploy-your-site', '6b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/242saurus/docs/tutorial-basics/markdown-features', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/242saurus/docs/tutorial-extras/manage-docs-versions', '116'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/242saurus/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/242saurus/docs/tutorial-extras/translate-your-site', 'dcf'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/242saurus/',
    component: ComponentCreator('/242saurus/', '58f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
