const main_Article_Link = "https://www.bbc.co.uk/sport/football/62172524";
const sub_Main_Article_Link = "https://www.bbc.co.uk/sport/football/62183246";
const secondary_Article_Link_1 = "https://www.bbc.co.uk/sport/football/62181796";
const secondary_Article_Link_2 = "https://www.bbc.co.uk/sport/football/62168557";
const secondary_Article_Link_3 = "https://www.bbc.co.uk/sport/football/62060727";
const secondary_Article_Link_4 = "https://www.bbc.co.uk/sport/football/62174838";
const secondary_Article_Link_5 = "https://www.youtube.com/watch?v=1JojFIy1N90";
const secondary_Article_Link_6 = "https://www.youtube.com/watch?v=QCLxi0xE90U";
const secondary_Article_Link_7 = "https://www.bbc.co.uk/sport/articles/c29x947dn19o";
const secondary_Article_Link_8 = "https://www.bbc.co.uk/sport/football/teams/leeds-united?page=7";
const secondary_Article_Link_9 = "https://www.bbc.co.uk/sport/football/62183277";
const secondary_Article_Link_10 = "https://www.bbc.co.uk/sport/football/62175742";
const secondary_Article_Link_11 = "https://www.bbc.co.uk/sport/football/62177721";
const secondary_Article_Link_12 = "https://www.bbc.co.uk/sport/football/62175929";

const arrayOfArticleLinks = [ {id:"main-article-link", link: main_Article_Link}, {id:"sub-main-article-link", link: sub_Main_Article_Link},
                              {id:"secondary-article-link-1", link: secondary_Article_Link_1}, {id:"secondary-article-link-2", link: secondary_Article_Link_2},
                              {id:"secondary-article-link-3", link: secondary_Article_Link_3}, {id:"secondary-article-link-4", link: secondary_Article_Link_4},
                              {id:"secondary-article-link-5", link: secondary_Article_Link_5}, {id:"secondary-article-link-6", link: secondary_Article_Link_6},
                              {id:"secondary-article-link-7", link: secondary_Article_Link_7}, {id:"secondary-article-link-8", link: secondary_Article_Link_8},
                              {id:"secondary-article-link-9", link: secondary_Article_Link_9}, {id:"secondary-article-link-10", link: secondary_Article_Link_10},
                              {id:"secondary-article-link-11", link: secondary_Article_Link_11}, {id:"secondary-article-link-12", link: secondary_Article_Link_12},
                            ];

function loadLink(article_id_link){
  arrayOfArticleLinks.forEach(function(obj){
    if(obj.id == article_id_link){
      window.location.href = obj.link;
    }
  });
}

