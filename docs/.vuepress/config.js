module.exports = {
    base: '/hololens-101/',
    title: 'Hololens Demo',
    description: 'Hololens Demo',
    dest: 'public',
    ga: 'UA-119599854-1',
    serviceWorker: true,
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'contents', link: '/contents/' }
      ],
    
      sidebar: {
        '/contents/': genSidebarConfigAbout('Contents')
  
      },
  
      lastUpdated: 'Last Updated',
  
      // Assumes GitHub. Can also be a full GitLab url.
      repo: 'Imamachi-n/hololens-101',
      // Customising the header label
      // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
      repoLabel: 'GitHub',
  
      // Optional options for generating "Edit this page" link
  
      // if your docs are in a different repo from your main project:
      docsRepo: 'Imamachi-n/hololens-101',
      // if your docs are not at the root of the repo:
      docsDir: 'docs',
      // if your docs are in a specific branch (defaults to 'master'):
      docsBranch: 'master',
      // defaults to true, set to false to disable
      editLinks: true,
      // custom text for edit link. Defaults to "Edit this page"
      editLinkText: 'Edit this page on GitHub',
  
      
    },
    head: [
      ['link', { rel: 'icon', href: '/hero.jpg' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ]
  }
  
  function genSidebarConfigAbout (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'MR-Basics-100-Getting-started-with-Unity'
        ]
      }
    ]
  }