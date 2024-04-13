---
title: "NSF CAREER: Towards a Data-driven Understanding of Online Sentiment"
award: "NSF CAREER: Towards a Data-driven Understanding of Online Sentiment"
amount: $517,484
start_date: "2021-05-01"
end_date: "2026-04-30"
role: PI
link: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2046590"
tags:
  - NSF
---

This [NSF sponsored project](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2046590) is oriented around understanding coded language on social media, explainable systems for rating the sentiment of content, and user and community level modeling of online sentiment.

# Highlights

So far, this project has resulted in 17 papers, three of which have won awards.
While all the research outputs from this project have had impact, there are a few highlights that can help better understand the type of advances we are making.

## Deplatforming

![](/images/deplatforming1.png)

One of our more impactful results have been related to deplatforming as a mitigation technique on social media.
We performed the first large-scale analysis of deplatforming events from the perspective of how the deplatformed communities' reacted.
Here, we discovered that the communities did not just dissipate into thin air, but instead they created their own, alternative platforms.
While there _were_ some positive outcomes, e.g., not every member of the community migrated to the new platform, the behavior on the new platform indicates that users showed a significant _increase_ in the type of behavior that got them deplatformed in the first place.
These results, which we confirmed for communities and users deplatformed from both [Reddit](https://doi.org/10.1145/3476057) and [Twitter](https://doi.org/10.1145/3447535.3462637), have shed new light on the unforeseen consequences of hard moderation strategies and sparked a more nuanced conversation of how to deal with dangerous online behavior.

## Large Language Model Safety

![](/images/toxicbuddy1.png)

We provided one of the first systematic methods for addressing safety concerns of Open Domain Chatbots.
In this [work](https://doi.org/10.1145/3548606.3560599), we explored the consequences of large language model based chatbots' hunger for data.
In a nutshell, LLMs scale with respect to the data they are trained on, and open domain chatbots make use of this to enable new conversational features that are currently leading to a new understanding of how we interact with computers.
However, as part of this training data, LLMs are essentially guaranteed to learn from at least _some_ bad content due to their sheer hunger for data.
The issue is thus that non-toxic, innocent queries to a chatbot might trigger a toxic response.
But, how can we test for this in a systematic fashion?
To address this, we introduced Toxic Buddy, an adversarial chatbot that has been designed specifically to generate non-toxic queries that other chatbots will respond to in a toxic fashion.
This work, which was published shortly before chatGPT became available to the public, was the first to produce a toolchain that can be easily added to any LLM safety analysis pipeline.

# Publications

1. Paudel, Pujan, Jeremy Blackburn, Emiliano De Cristofaro, Savvas Zannettou, and Gianluca Stringhini. ["Lambretta: learning to rank for Twitter soft moderation."](https://doi.org/10.1109/SP46215.2023.10179392) In 2023 IEEE Symposium on Security and Privacy (SP), pp. 311-326. IEEE, 2023. [PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10179392)
1. Efstratiou, A., Blackburn, J., Caulfield, T., Stringhini, G., Zannettou, S., & De Cristofaro, E. (2023, June). "[Non-polar opposites: analyzing the relationship between echo chambers and hostile intergroup interactions on Reddit."](https://doi.org/10.1609/icwsm.v17i1.22138) In Proceedings of the International AAAI Conference on Web and Social Media (Vol. 17, pp. 197-208). [PDF](https://ojs.aaai.org/index.php/ICWSM/article/view/22138/21917)
1. Lin KS, Palumbo G, Guo Z, Hwang Y, Blackburn J, Shoemaker DP, Mahmood F, Wang Z, Fiete GA, Wieder BJ, Bradlyn B. ["Spin-resolved topology and partial axion angles in three-dimensional insulators."](https://doi.org/10.1038/s41467-024-44762-w) Nature communications. 2024 Jan 16;15(1):550. [PDF](https://www.nature.com/articles/s41467-024-44762-w.pdf)
1. Aldreabi, Esraa, and Jeremy Blackburn. ["Enhancing Automated Hate Speech Detection: Addressing Islamophobia and Freedom of Speech in Online Discussions."](https://doi.org/10.1145/3625007.3627487) Proceedings of the International Conference on Advances in Social Networks Analysis and Mining. 2023.[PDF](https://dl.acm.org/doi/pdf/10.1145/3625007.3627487)
1. Aldreabi, Esraa, Justin M. Lee, and Jeremy Blackburn. ["Using deep learning to detect islamophobia on Reddit."](https://doi.org/10.32473/flairs.36.133324) The International FLAIRS Conference Proceedings. Vol. 36. 2023. [PDF](https://journals.flvc.org/FLAIRS/article/download/133324/137672)
1. Balci, Utkucan, Chen Ling, Emiliano De Cristofaro, Megan Squire, Gianluca Stringhini, and Jeremy Blackburn. ["Beyond Fish and Bicycles: Exploring the Varieties of Online Women's Ideological Spaces."](https://doi.org/10.1145/3578503.3583618) In 15th acm web science conference 2023. [PDF](https://arxiv.org/pdf/2303.07099)
1. 🏆 Yudhoatmojo, S. B., E. D. Cristofaro, and J. Blackburn. ["Understanding the Use of e-Prints on Reddit and 4chan's Politically Incorrect Board."](https://doi.org/10.1145/3578503.3583627) In 15th acm web science conference 2023. [PDF](https://arxiv.org/pdf/2111.02455).
1. 🏆 Si, Wai Man, Michael Backes, Jeremy Blackburn, Emiliano De Cristofaro, Gianluca Stringhini, Savvas Zannettou, and Yang Zhang. ["Why So Toxic? Measuring and Triggering Toxic Behavior in Open-Domain Chatbots."](https://doi.org/10.1145/3548606.3560599) In Proceedings of the 2022 ACM SIGSAC Conference on Computer and Communications Security, pp. 2659-2673. 2022. [PDF](https://arxiv.org/pdf/2209.03463.pdf)
1. Ling, Chen, Jeremy Blackburn, Emiliano De Cristofaro, and Gianluca Stringhini. ["Slapping Cats, Bopping Heads, and Oreo Shakes: Understanding Indicators of Virality in TikTok Short Videos."](https://doi.org/10.1145/3501247.3531551) In 14th ACM Web Science Conference 2022, pp. 164-173. 2022. [PDF](https://arxiv.org/pdf/2111.02452.pdf)
1. Shen, Xinyue, Xinlei He, Michael Backes, Jeremy Blackburn, Savvas Zannettou, and Yang Zhang. ["On Xing Tian and the Perseverance of Anti-China Sentiment Online."](https://doi.org/10.1609/icwsm.v16i1.19348) In Proceedings of the International AAAI Conference on Web and Social Media, vol. 16, pp. 944-955. 2022. [PDF](https://arxiv.org/pdf/2204.08935.pdf)
1. Papasavva, Antonis, Max Aliapoulios, Cameron Ballard, Emiliano De Cristofaro, Gianluca Stringhini, Savvas Zannettou, and Jeremy Blackburn. ["The gospel according to Q: Understanding the QAnon conspiracy from the perspective of canonical information."](https://doi.org/10.1609/icwsm.v16i1.19330) In Proceedings of the International AAAI Conference on Web and Social Media, vol. 16, pp. 735-746. 2022. [PDF](https://arxiv.org/pdf/2101.08750)
1. Papadamou, Kostantinos, Savvas Zannettou, Jeremy Blackburn, Emiliano De Cristofaro, Gianluca Stringhini, and Michael Sirivianos. ["“It is just a flu”: Assessing the Effect of Watch History on YouTube’s Pseudoscientific Video Recommendations."](https://doi.org/10.1609/icwsm.v16i1.19329) In Proceedings of the international AAAI conference on web and social media, vol. 16, pp. 723-734. 2022. [PDF](https://arxiv.org/pdf/2010.11638)
1. Saeed, Mohammad Hammas, Shiza Ali, Jeremy Blackburn, Emiliano De Cristofaro, Savvas Zannettou, and Gianluca Stringhini. ["Trollmagnifier: Detecting state-sponsored troll accounts on reddit."](https://doi.org/10.1109/SP46214.2022.9833706) In 2022 IEEE Symposium on Security and Privacy (SP), pp. 2161-2175. IEEE, 2022. [PDF](https://arxiv.org/pdf/2112.00443.pdf)
1. Wang, Yuping, Savvas Zannettou, Jeremy Blackburn, Barry Bradlyn, Emiliano De Cristofaro, and Gianluca Stringhini. ["A multi-platform analysis of political news discussion and sharing on web communities."](https://doi.org/10.1109/BigData52589.2021.9671843) In 2021 IEEE International Conference on Big Data (Big Data), pp. 1481-1492. IEEE, 2021. [PDF](https://arxiv.org/pdf/2103.03631)
1. Papadamou, Kostantinos, Savvas Zannettou, Jeremy Blackburn, Emiliano De Cristofaro, Gianluca Stringhini, and Michael Sirivianos. [""How over is it?" Understanding the Incel Community on YouTube."](https://doi.org/10.1145/3479556) Proceedings of the ACM on Human-Computer Interaction 5, no. CSCW2 (2021): 1-25. [PDF](https://arxiv.org/pdf/2001.08293)
1. 🏆 Horta Ribeiro, Manoel, Shagun Jhaver, Savvas Zannettou, Jeremy Blackburn, Gianluca Stringhini, Emiliano De Cristofaro, and Robert West. ["Do platform migrations compromise content moderation? evidence from r/the_donald and r/incels."](https://doi.org/10.1145/3476057) Proceedings of the ACM on Human-Computer Interaction 5, no. CSCW2 (2021): 1-24. [PDF](https://arxiv.org/pdf/2010.10397)
1. Ali, Shiza, Mohammad Hammas Saeed, Esraa Aldreabi, Jeremy Blackburn, Emiliano De Cristofaro, Savvas Zannettou, and Gianluca Stringhini. ["Understanding the effect of deplatforming on social networks."](https://doi.org/10.1145/3447535.3462637) In 13th acm web science conference 2021, pp. 187-195. 2021. [PDF](/papers/deplatforming-websci2021.pdf)
