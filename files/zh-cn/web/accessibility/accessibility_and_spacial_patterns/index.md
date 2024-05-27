---
title: 无障碍和空间模式
slug: Web/Accessibility/Accessibility_and_Spacial_Patterns
l10n:
   sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

## 空间定位

美国国家航空航天局进行了有关颜色感知的研究，并发现亮度对颜色感知的影响很大。下面的两幅图片来自NASA的研究，具体来自文章 "[Designing With Blue](https://colorusage.arc.nasa.gov/blue_2.php)"。

![黄色与红色在空间定位稳定性的比较。两者与其背景大致等亮。黄色与红色之间的色条与黑色条的错位和间隙在物理上是相同的，但黄色的视觉效果要比红色明显得多。](yellow_edge_3.gif) ![黄色与红色在空间定位稳定性的比较。两者与其背景大致等亮。黄色与红色之间的色条与黑色条的错位和间隙在物理上是相同的，但黄色的视觉效果要比红色明显得多。](yellow_edge_4.gif)

"_**空间定位。**与背景具有相同亮度的符号在空间和时间上的感知性较低，比具有较高亮度对比度的符号更容易"飘移"视觉上或被具有高亮度对比度的相邻符号"捕获"。这种现象似乎对仅在蓝色通道上有所不同的符号/背景组合特别有问题。_"

## 条纹之间的距离

光敏性癫痫可能由静态图像以及动画引起。对于这一机制了解甚少，但据信与大脑中形成的"γ振荡"有关。大脑中的这些振荡是一种不同于其他种类可能引起光敏性癫痫的神经反应。

条纹和图案是造成问题的典型图像类型，其中条纹被研究得最仔细。如果任何方向上的光暗条纹对超过五对，则有可能造成危害。它们可以是平行的、径向的、弯曲的或直的，并且可以由重复元素的行形成。

2005年，阿诺德·威尔金斯、约翰·埃米特和格雷厄姆·哈丁评估了导致癫痫发作的图案图像的特征化准则。他们将准则修订为它们的基本核心，并提出了一种令人惊讶地简单但强大的[测试](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)，他们在论文**[《表征诱发癫痫的图案图像并优化预防准则》](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1528-1167.2005.01405.x)**中发表了这一测试。

> **备注：** 评估材料所需的步骤简化如下：
> 注视屏幕：
> 
> - 是否有超过五个条纹？
> - 如果是，则持续时间是否超过0.5秒？
> - 如果是，则亮度是否超过规定的限制？
> - 如果是，则分类图案的运动。
> - 是否违反了准则？
> 
> 如果是，则降低亮度。

## 文本和填充

WCAG对于对比度感知的标准不考虑填充效果。例如，蓝色文本在灰色背景上，如果局部被黑色而不是白色所包围，则更容易感知。对颜色进行"局部"适应是存在的。简而言之：填充很重要。

## 数学

空间推理影响数学学习；因此，数学呈现中的空间关系影响认知。网页开发人员可以通过数学的显示方式来做些事情。动画在这方面起着重要作用。例如，物体旋转时的外观，“切片”的外观以及它们在空间中的相互关系都会影响以空间术语理解数学的能力。

## 盲文

现代技术使非专家能够打印盲文。例如，Adobe Illustrator允许用户对ADA盲文进行排版以打印出来。

准确地向盲人呈现空间模式对于可访问性至关重要。例如，仅了解盲文是不够的。盲文点必须在空间上相互分开，以便以一种"人类"方式可读。人类的触觉确实能够轻松地区分盲文点之间过于接近或过于分散的情况。

盲文字符周围必须有空间。盲文用户不能将手指放在盲文字符的"顶部"，用户必须在字符上移动手指，就像视力正常的人必须在页面上的文本上移动眼睛一样。

空间的性质可以根据正在使用的MIME类型及其版本而变化。例如，SVG上的边框可以从其尺寸向内外延伸，或者对于较新版本的SVG，完全从外部延伸，从而减少SVG周围的空间以便感知。

## 参见

### MDN

- [可访问性：用户可以采取哪些措施以更安全地浏览](/en-US/docs/Web/Accessibility/Accessibility:_What_users_can_to_to_browse_safely)
- [癫痫和身体反应的网络可访问性](/en-US/docs/Web/Accessibility/Seizure_disorders)
- [网络可访问性：理解颜色和亮度](/en-US/docs/Web/Accessibility/Understanding_Colors_and_Luminance)

### 盲文

- [第3部分：在Adobe Illustrator中正确排版ADA盲文的逐步指南](https://www.tinkeringmonkey.com/guides/ada-signage/a-step-by-step-guide-to-typesetting-ada-braille-correctly-in-adobe-illustrator/)
- [盲文点中的空间数学（5个部分中的第4部分）](https://www.youtube.com/watch?v=yz9vefDsj1g)

### 政府文献

- [NASA：蓝色设计](https://colorusage.arc.nasa.gov/blue_2.php)

### 数学

- [空间推理：为什么数学谈论的不仅仅是数字](https://dreme.stanford.edu/news/spatial-reasoning-why-math-talk-about-more-numbers)

### 科学文献

- [上下文中的色彩恒定性：局部适应和参考级别的作用](https://jov.arvojournals.org/article.aspx?articleid=2192799)
- [γ振荡与光敏性癫痫](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub)
- [表征诱发癫痫的图案图像并优化预防准则](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.01405.x) Arnold Wilkins, John Emmett, and Graham Harding

#### 贡献者

衷心感谢[Diagram Center](http://diagramcenter.org/)的吉姆·艾伦(Jim Allan)就替代教育手段的话题进行的讨论。
