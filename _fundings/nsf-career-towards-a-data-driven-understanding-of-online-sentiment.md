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

# Project Summary

This [NSF sponsored project](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2046590) is oriented around understanding coded language on social media, explainable systems for rating the sentiment of content, and use and community level modeling of online sentiment.

# Highlights

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

Si, Wai Man, Michael Backes, Jeremy Blackburn, Emiliano De Cristofaro, Gianluca Stringhini, Savvas Zannettou, and Yang Zhang. ["Why So Toxic? Measuring and Triggering Toxic Behavior in Open-Domain Chatbots."](https://doi.org/10.1145/3548606.3560599) In Proceedings of the 2022 ACM SIGSAC Conference on Computer and Communications Security, pp. 2659-2673. 2022. [PDF](https://arxiv.org/pdf/2209.03463.pdf)

Shen, Xinyue, Xinlei He, Michael Backes, Jeremy Blackburn, Savvas Zannettou, and Yang Zhang. ["On Xing Tian and the Perseverance of Anti-China Sentiment Online."](https://doi.org/10.1609/icwsm.v16i1.19348) In Proceedings of the International AAAI Conference on Web and Social Media, vol. 16, pp. 944-955. 2022. [PDF](https://arxiv.org/pdf/2204.08935.pdf)

