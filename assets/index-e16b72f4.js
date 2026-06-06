import{g as e}from"./index-e5c19b30.js";const i=e`
  query getTeams {
    teams {
      link
      title
    }
  }
`,n=e`
  query getTeam($link: String) {
    team(link: $link) {
      title
      members {
        id
        name {
          ru
          en
        }
        role {
          ru
          en
        }
        about {
          ru
          en
        }
        nickname
        image
        socials {
          link
          social
        }
      }
    }
  }
`;export{i as G,n as a};
