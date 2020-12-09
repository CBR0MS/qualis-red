---
path: /post/wikiviz
title: "WikiViz: Recap and New Directions"
author: Christian Broms
date: 2020-05-25T00:00:00.000Z
tags:
    - features
    - ideas
image: /uploads/wikiviz.png
---

# WikiViz: Recap and New Directions 

After a few months, I've finished up [a prototype I've been working on called WikiViz](https://wikiviz.rainflame.com/). The project aims to explore what it would be like to browse through pages on the web in parallel, with visible hyperlink connections. It's very much inspired by Ted Nelson's [Project Xanadu](https://en.wikipedia.org/wiki/Project_Xanadu), a visionary set of ideas from the mid 1960's, many of which would become integrated into the web's core functionality. Still, important parts of Nelson's vision have yet to be implemented, such as *permanent* links (no constantly changing and often broken links between pages), [transclusion](https://en.wikipedia.org/wiki/Transclusion), and visible links. While this functionality [has been prototyped](http://xanadu.com/xuDemoPage.html) by Nelson and his collaborators, it is still very much unusable in a general context. [Another prototype from Project Xanadu](http://xanadu.com/xanademos/MoeJusteOrigins.html) focused primarily on the interface, emphasizing connectivity between pages and parallelism in the browser. Again, however, the prototype is unusable beyond the example text provided. 

![An interface with parallel pages and visible links created by Project Xanadu](/uploads/xanadu.png)

## WikiViz: A Working Prototype 

![Using the WikiViz interface](/uploads/wikiviz.gif)

[I developed an interface that works with Wikipedia to present pages in parallel and with visible links](https://wikiviz.rainflame.com). The prototype suggests a different kind of meandering browsing, where moving from page to page is a less head-spinning action. Instead of clicking on a hyperlink and the entire content of the page changing, the new page is brought up next to the original, and a *trail* of pages is created, a bit like [Memex](https://en.wikipedia.org/wiki/Memex). The reader can opt to move to the new page or not, even bringing up other linked pages in the meantime. Clicking on a hyperlink no longer results in the reader's entire attention shifting to the new page. 

![The WikiViz interface showing visible links between pages.](/uploads/wikiviz.png)

Another important aspect of WikiViz is that the state of the trail is preserved. The link to the trail can be saved and reopened later in the exact same way as it was left. [Here's an example of that](https://wikiviz.rainflame.com/trail/eyJwIjoiUHJvamVjdF9YYW5hZHUiLCJ0IjpbeyJwIjoiVGVkX05lbHNvbiIsInQiOltdfSx7InAiOiJUcmFuc2NsdXNpb24iLCJ0IjpbeyJwIjoiTW9kdWxhcl9kZXNpZ24iLCJ0IjpbXX0seyJwIjoiSHlwZXJ0ZXh0IiwidCI6W119XX1dfQ==). Though the pages themselves are not saved and the links can be broken (the prototype relies on the Wikipedia API to retrieve content), the relationship between the pages is. This happens through a simple datastructure that can be recursively enlarged.

### Where It's Lacking

WikiViz is far from perfect; in fact it's not particularly usable for much beyond being a proof-of-concept. While trails are an excellent way of browsing and creating contextual associations between pages, the interface is clunky and doesn't allow for the same kind of speedy changes between pages that we're accustomed to. The overview of the connections between pages is sometimes useful but not when actually interacting with or reading each page; during this time it becomes distracting and a nuisance. While this might be fixable with shortcuts and a kind of "focus" mode, I tend to think this is an inherent issue with the design. Presenting the entire trail will always result in too much information to process, especially as the trail could go on nearly infinitely. *The key design challenge is how to present the relevant context for each page while reducing cognitive load and ensuring that the content of the current page is given a higher priority than others.* 

## Beyond Wikipedia: Generalizing Parallel Browsing and Visible Links

Nelson's work has shown that this method of browsing certainly deserves more attention as a viable way of traversing the web. I'd like to expand this prototype beyond Wikipedia and take on any given page. Any session on the web can be fit into this kind of recursive structure of pages and links. It's likely that the next iteration will take the form of a browser extension. This way, trails can be formed from browsing history and displayed through the reader's browser. Given the sensitive nature of this information, the extension should allow all data to be stored locally on the reader's machine rather than through an external website, as WikiViz does. Additionally, the majority of the browsing experience can remain the same, just certain functionality can be injected into each page by the browser, creating a cohesive experience between pages. 

## Beyond Hyperlinks: How is a Link Authored?

Project Xanadu's vision for a future in which anyone can explore the entirety of human thought though a digital interface in as free and open a way as possible feels far off from today's reality. Most of these ideals of openness and freedom and permanence of information have been gradually erased by the standardization of the web and expansion of large centralized platforms held by questionably motivated corporations. Developing this system in such a way as to maximally decentralize it (many browsers, many types of browsers) in as open a manner as possible will be important to try and avoid the same fate. 

Beyond considerations situated within the constraints of the web, it's also important to consider how a small change might be made to the web to maximally impact people's experience. I believe one such change is *to shift authorship of hyperlinks from page authors to page readers*. As someone browses through the web they should be able to find links between pages and the ideas and content within themselves. Once someone has found a new link, others should be able to see that link use it in the same way that they might use the author's own link.  

Given this project is a method of browsing through the web with hyperlinks, it makes sense to try and integrate this reader-based-authorship into the prototype. How to do it will take quite some consideration as it would be best to avoid the centralized server model and instead distribute this information amongst the readers or a set of independently-held servers, like the [fediverse](https://en.wikipedia.org/wiki/Fediverse). Even making this functionality a part of a peer-to-peer web browser like the [Beaker Browser](https://beakerbrowser.com/) might be a good direction to take this. For now though, a browser extension that implements a usable way of browsing between pages in parallel and with visible hyperlink connections remains a sizable enough challenge.  