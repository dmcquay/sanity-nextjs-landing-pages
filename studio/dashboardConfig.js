export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f369e1726151dd0c10e3ed0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dxjpfkck',
                  apiId: 'b94533bb-64c3-4f0a-9a26-2ecf256edea7'
                },
                {
                  buildHookId: '5f369e189522446467cc7164',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-nncn364t',
                  apiId: 'a518f024-5902-40b0-a287-48e4bba4a8ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dmcquay/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-nncn364t.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
