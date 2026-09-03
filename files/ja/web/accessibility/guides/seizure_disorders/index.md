---
title: 発作や身体的反応に対するウェブアクセシビリティ
short-title: 発作や身体的反応の予防
slug: Web/Accessibility/Guides/Seizure_disorders
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

この記事では、前庭機能障害のある人々がウェブコンテンツをアクセスしやすくするための考え方を紹介するとともに、発作やその他の身体的反応を引き起こす可能性のあるコンテンツをどのように測定し、防止するかについて解説します。

## 概要

### 発作

光によって引き起こされる発作は、光感受性てんかんと呼ばれます。ちらつき、点滅、または点滅するコンテンツは、光感受性てんかんを引き起こす可能性があります。動画、アニメーション GIF、アニメーション PNG、アニメーション SVG、{{Glossary("Canvas","キャンバス")}}、CSS や JavaScript によるアニメーションを使用するウェブ技術は、いずれも発作やその他の身体機能を損なう反応を誘発する可能性のあるコンテンツを生成する可能性があります。特定の視覚パターン、特に縞模様は、アニメーションでなくても身体反応を引き起こす可能性があります。光感受性てんかんは、実際には「反射性てんかん」の一種であり、何らかの誘因に反応して発作が起こるものです。光感受性てんかんの場合、発作は特に点滅する光によって引き起こされますが、他の種類の反射性てんかんは、読書や騒音によって引き起こされることもあります。パターンや画像もてんかんを引き起こす可能性があります。

静止画像が発作やその他の障害を引き起こす可能性があるという事実は、[『ガンマ波と光感受性てんかん』](https://linkinghub.elsevier.com/retrieve/pii/S0960982217304062)などの論文で記録されており、そこでは「特定の視覚的画像は、動きやちらつきがなくても、光感受性てんかん患者の発作を引き起こす可能性がある」と指摘されています。てんかん財団は、記事[『てんかんの最も複雑な症状の一つである光感受性について』](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions)の中で、静止画像やパターンについて「明暗の縞模様がはっきり識別できる静止画や動画は、暗い部分と明るい部分が交互に現れるため、点滅する光と同じ効果をもたらします。」と述べています。米国てんかん財団のワーキンググループは、この問題をある程度「定量化」し、「発作を誘発する可能性があるパターンとは、どのような向きであっても、5 組以上の明暗の縞模様がはっきりと識別できるものです」としています。[Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) によると、縞模様に加え、チェック模様も光感受性発作を引き起こすことが知られています。

静止画像も発作の誘因となり得ますが、その効果は一貫していません。確立されており、かつ強力な誘因として挙げられるのは、点滅光やストロボ光です。USFの包括的てんかんプログラムに所属するセリム・ベンバディス博士は、「実際に実証されているのは点滅光だけであり、これは光感受性てんかんの患者において発作を誘発する可能性があります。ただし、光感受性のあるてんかんの種類はごく一部であり、てんかんの大部分は光感受性ではありません」と述べています。 光感受性によって引き起こされる発作に加え、特定の楽曲を聴くことによっても、いわゆる音楽誘発性発作が引き起こされることがありますが、この種の発作ははるかに稀であるようです。音楽誘発性発作に関する優れた入門情報については、エピレプシー・オンタリオのウェブサイトにある[音楽誘発性発作](https://epilepsyontario.org/musicogenic-seizures/)のページをご覧ください。

発作とてんかんは同じものではありません。てんかん財団 (Epilepsy Foundation) の記事[『てんかんの定義の改訂』](https://www.epilepsy.com/stories/revised-definition-epilepsy)では、「_発作は単発的な出来事であり、てんかんは誘因のない発作が繰り返し起こる疾患である_」と指摘しています。てんかん財団のページ[『発作はどれほど深刻か？』](https://www.epilepsy.com/what-is-epilepsy/understanding-seizures/how-serious-are-seizures)によると、「てんかんによる突然の予期せぬ死 (SUDEP) は、てんかん患者における疾患関連の死因の中で最も一般的なものと考えられます。頻度は高くないものの、これは極めて現実的な問題であり、人々はそのリスクを認識しておく必要があります」。

重要なのは、発作は間違いなく致命的になり得るものであり、実際に致命的となるケースもあるということです。そして、光や音楽に反応して発作を引き起こしやすい人にとって、ウェブをより安全な場所にするためには、開発者やデザイナーの役割が極めて重要です。
発作は致命的となる可能性がありますが、「単に」身体機能を損なう程度の発作であっても、その重症度によってはユーザーが行動不能に陥る場合があります。また、見当識障害、吐き気、嘔吐などの他の症状も、その重症度によってはユーザーが通常の活動を続けられなくなるほど深刻になることがあります。てんかん財団の記事[『光過敏性と発作』](https://www.epilepsy.com/what-is-epilepsy/seizure-triggers/photosensitivity)には、光に敏感な人に発作を引き起こす可能性のある誘因のリストが掲載されています。以下にそのリストの一部を抜粋します。

- テレビ画面やコンピュータのモニター（ちらつきや映像の揺れが原因）。
- 急速な点滅や異なる色のパターンが交互に現れる特定のビデオゲームやテレビ放送。
- 火災報知器のストロボライトのような強い点滅光。
- 日光などの自然光。特に、水面にきらめく光や、木々の間やベネチアンブラインドのスラットの間から差し込む揺らめく光。
- 特定の視覚パターン、特に対照的な色の縞模様。

同記事ではさらに、光感受性反応を引き起こすには多くの要因が重なる必要があると述べられています。注目すべきは、光の波長もその要因の一つとして挙げられている点で、特にスペクトルの赤色域の波長が問題となりやすいようです。記事[『WCAG 2.0「3回の点滅」または「閾値以下」の理解』](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)では、概して次のように述べられています。「光感受性発作障害を持つ人は、特定の周波数で数回以上点滅するコンテンツによって発作が誘発される可能性がある"_ また、さらに具体的に次のように指摘しています。「_人々は他の色よりも赤色の点滅に対してさらに敏感であるため、飽和した赤色の点滅については特別なテストが用意されている。」

害を及ぼすのに、画像や動画さえ必要ありません。JavaScript を使えば簡単に実現できる、色や輝度を高速で変化させるように設定された {{HTMLElement('div')}} 要素でも、実際に害を及ぼす可能性があります。また、ちらつきはあらゆる場所で発生する可能性があります。例えば、ページの読み込み中に表示される一般的な「ローディングアイコン」も、回転中に簡単に「ちらつく」ことがあります。

運動機能に問題を抱える人々にとっては、さらに懸念される点があります。例えば、Trace Research & Development Center の[光感受性てんかん分析ツール](https://trace.umd.edu/peat/)のページには、「光感受性てんかん発作は、ウェブやコンピュータ上のコンテンツにおける特定の種類の点滅によって誘発される可能性があります。これには、画面の広い範囲が急速に繰り返し点滅するマウスオーバー効果も含まれます」と記載されています。

### その他の身体的反応

吐き気、めまい（またはふらつき）、見当識障害は、あらゆる種類の疾患に伴う非常に非特異的な症状であり、発作を特に示唆するものではありません（ただし、発作でも見られる見当識障害は例外かもしれません）。しかし、点滅、ちらつき、閃光、その他の同様の刺激によって引き起こされる可能性のある身体的反応は、発作だけではありません。1997年、ある日本のアニメ番組で「ウイルス爆弾」が登場しました。このアニメを視聴していた子供たちの中には、発作を起こした子もいれば、吐き気、震え、吐血などの症状を訴えた子もいました。子供たちの反応は非常に深刻で、救急搬送される事態となりました。以下に挙げる身体的障害はすべて起こりうる結果であり、これらの身体的反応はいずれも、日常生活に支障をきたすほど重篤なものになる可能性があります。

- 発作
- 前庭障害
- 片頭痛
- 吐き気
- 嘔吐

## 点滅、ちらつき、揺らぎ

「点滅 (flashing)」と「ちらつき (blinking)」は、時に同じ意味で使用されることがありますが、これらは同じものではありません。W3Cによると、ちらつきは注意散漫を引き起こす問題であるのに対し、点滅とは、1秒間に3回以上発生し、かつ十分に大きく明るいコンテンツを指します。[セクション 508](https://www.section508.gov/content/guide-accessible-web-design-development/#flashing) では、周波数が 3 Hz（1 秒あたりの点滅回数）を超え、55 Hz 未満の点滅効果を禁止しています。てんかん財団の記事[「光感受性の解明、 てんかんの最も複雑な症状の一つ」](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions)では、「一般的に、1 秒あたり 5～30 回（ヘルツ）の周波数で点滅する光が、発作を引き起こす可能性が最も高い。安全を確保するため、光過敏症の人は 1 秒あたり 3 回を超える点滅にさらされないことが推奨されています。」しかし、一部の人にとっては、3 Hz未満の点滅でも症状を引き起こすことがあります。

すべての点滅や点滅が必ずしも悪いわけではないという点に留意することが重要です。NASAは、["Blinking, Flashing, and Temporal Response"](https://web.archive.org/web/20250215094718/https://colorusage.arc.nasa.gov/flashing.php) において、点滅やフラッシュは注意を引くための強力な手段となり得ると指摘しています。これは警告ボタンに不可欠な機能です（ただし、これは要素が点滅している間もユーザーが画面を見続けられることを前提としていますが、必ずしもそうとは限りません）。一部のユーザーにとっては、点滅するボタンは、控えめに、かつ注意深く使用しなければならないという警告でもあります。ウェブデザインに当てはめると、画面を「乗っ取って」緊急時の点滅警告を表示することで社内の従業員に危険を知らせるシステムでは、警告が表示される際の点滅頻度、サイズ、および輝度の変化を考慮に入れる必要があります。

### 点滅やちらつき ― 危険性はどのように定量化されるのか？

記事[「光およびパターンによる発作：米国てんかん財団ワーキンググループによる専門家コンセンサス」](https://onlinelibrary.wiley.com/doi/epdf/10.1111/j.1528-1167.2005.31405.x)によると 「閃光は、輝度が20 cd/msup以上で、2/sup以上であり、かつ固有視角が0.006ステラジアン以上（標準的な視聴距離において、中心視野の約10％または画面面積の25％に相当）を占める場合、潜在的な危険因子となる。」

標準的な視聴距離とはどの程度のことでしょうか？本稿執筆当時、一般的な視聴距離として検討されていた推奨値は、「標準的な視聴距離が 2 m（約 9 フィート）以上であることを前提として、テレビ画面面積の 25% を超える領域に適用されるとみなすことができる」というものでした。それ以来、状況は大きく変化し、現在では私たちは画面に以前よりはるかに近づいて視聴しています。

特定の色や色の組み合わせも重要な要素となります。[「特定の色がてんかん発作を引き起こす可能性が高いと研究者が発見」](https://www.sciencedaily.com/releases/2009/09/090925092858.htm)では、_「…脳のダイナミクスに潜む複雑性は、他の組み合わせよりも特定の色の組み合わせによってより強く調節される可能性がある。例えば、赤と青の点滅刺激は、赤と緑、あるいは青と緑の刺激よりも大きな皮質興奮を引き起こす」_と指摘されている。

### 点滅および赤色の点滅

[WCAG 2.3.1 の「一般的な点滅」および「赤色の点滅」の閾値](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) は、次のように定義されています。
- **一般的な点滅**とは、[相対輝度](https://w3c.github.io/wcag/guidelines/22/# dfn-relative-luminance）の10％以上の変化のペアであり、かつ、より暗い画像の相対輝度が0.80未満である場合を指します。ここで、「相反する変化のペア」とは、増加に続いて減少、または減少に続いて増加することを指します。
- **赤色のフラッシュ**とは、飽和した赤色を含む、いかなる一対の相反する遷移を指す。
これらの基準は、先行研究に基づいている。2004年、米国てんかん財団（The Epilepsy Foundation of America）はワークショップを開催し、光感受性発作に関する[合意](https://pubmed.ncbi.nlm.nih.gov/16146438/)を策定し、_「 「フラッシュは、輝度が少なくとも20 cd/m<sup>2</sup>あり、周波数が少なくとも3 Hzで、固有視角が少なくとも0.006ステラジアン（標準的な視聴距離において、中心視野の約10％または画面面積の25％に相当）を占める場合、潜在的な危険となる。」飽和した赤色への移行、あるいはそこから離れる移行は重要であり、それ自体がリスクを構成します。「輝度にかかわらず、飽和した赤色への移行、あるいはそこから離れる移行もまた、リスクとみなされる。」

### 大きさや距離

#### どのくらい？場合による

「相対的な」サイズと距離の両方が重要となります。[PEAT](https://trace.umd.edu/peat/)によると、「コンテンツを 1024 x 768 ピクセルで表示した場合、同時に発生するフラッシュの合計面積は、画面上の任意の場所にある 341  x 256 ピクセルの長方形の総面積の 4 分の 1 以下である。」

視野が重要な考慮事項であるという点は、WCAG 2.3.1 について論じた記事の中で次のように述べられています。「評価の基準となる画面解像度として、1024 x 768 が使用されます。341 x 256 ピクセルのブロックは、一般的な視聴距離における 10 度の視野範囲を表しています。（この 10 度の視野範囲は元の仕様書に基づくもので、人が光刺激を最も受けやすい目の中心視野部分を表しています。）」

このピクセル面積比は相対的なサイズを算出するものですが、距離も重要な要素となります。

距離が重要なのは、それが視野全体に影響を与えるからです。ゲーム用のヘッドセットを装着すると、視野全体が画面に覆われることになります。[WebXR](/ja/docs/Web/API/WebXR_Device_API) は、ブラウザー上で VR を体験できるようにするオープンな仕様であり、スマートフォン、コンピュータ、ヘッドセットなどで利用できます。アイマスクは目に非常に近いため、アイマスク内での画像の点滅に関する懸念が高まっています。

研究によると、一般的に、VR の利用はリフレッシュレートが高いため、通常の画面視聴よりも実際には安全である可能性があることが示されています。[Fisher et al. 2022](https://onlinelibrary.wiley.com/doi/full/10.1111/epi.17175) が要約しているように、「現時点で入手可能な限られたデータからは、VR技術に関して特に発作の懸念は生じていないが、経験が蓄積されるにつれてこの見解は変わる可能性がある。明るい閃光、刺激的なパターン、色の変化などを含む特定の種類のVRコンテンツは、現実世界と同様に、てんかん発作を誘発すると予想される。」

（ただし、点滅するカーソルは画面のごく一部しか占めていないものの、一部のユーザーはそれを見るだけで、片頭痛や乗り物酔い、方向感覚の喪失などを引き起こす可能性があることに注意してください。）

### パターンとパララックス

明暗が対照的な幾何学模様は、発作の引き金となることが知られており、ストライプやチェック柄がその代表的な例です。米国てんかん財団（Epilepsy Foundation of America）のワーキンググループは、発作を誘発する可能性のある明暗のストライプの組み合わせの数や、どのような条件下で発作が起こりやすいかをまとめています。模様が一定で直線的な場合、許容される最大本数は8本ですが、波打っている場合は 5 本以下に抑える必要があります。

パララックス効果は方向感覚の喪失を引き起こす可能性があります。パララックス効果の使用には注意が必要です。やむを得ず使用する場合は、ユーザーがそれを無効にできる操作手段を用意してください。

「発作を引き起こす可能性のある模様とは、いかなる向きであっても、明暗の縞が5組以上あり、かつはっきりと識別できる縞模様を指す。いかなるパターンにおいても、明暗の縞が、予想される最小視距離から目に対して合計で 0.006 ステラジアンを超える立体角を占め、最も明るい縞の輝度が 50 cd/msup2/sup を超え、かつパターンが 0.5 秒以上提示される場合、縞の方向が変化したり、振動したり、 点滅、またはコントラストが反転する場合、そのパターンは明るい縞と暗い縞のペアを5組以下でなければならない。パターンが変化しないか、あるいは一方向に滑らかに移動する場合は、8組以下とする。」

すべてが解明されているわけではなく、上記の指標があっても、さらに他の要因が影響を及ぼします。例えば、小さな領域から大きな領域へと移ると、脳が反応する可能性が高まるほか、コントラストが増し、空間周波数が低から中へと上昇します。また、その背後にある理屈は解明されていないものの、基本的な方向性（例えば縞模様）から複数の方向性（例えば、元の縞模様の上に、それとは直交するように別の縞模様を重ねた際に現れるチェック模様）へと変化させると、脳に影響を与えることも知られています。

### 色

アクセシビリティの観点から、色を理解することは重要です。ウェブアクセシビリティおよびアクセシビリティ全般に関連する内容については、[色と輝度の理解](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance)を参照してください。

色が背景とどのように関連しているか（通常は「コントラスト」という観点で捉えられます）や、アニメーションにおいてフレームごとに色がどれほど劇的に変化するかが重要です。詳細については、[「3 回の点滅」または「閾値以下」に関する SC 2.3.1 の理解](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)を参照してください。

#### 「赤」という特殊なケース

[特定の色は他の色に比べててんかん発作を引き起こしやすい](https://www.sciencedaily.com/releases/2009/09/090925092858.htm)ことが実証されています。人間の生理機能や心理は、一般的に赤色によって影響を受けます。行動に影響を与えるその力は、動物においても確認されています。

- **赤色脱彩検査：** 人間の目は赤色に対して非常に敏感に反応するため、眼科医はこれを利用した検査を実施しています。赤色脱彩検査は、視神経の健全性を評価するものです。眼科医がこの検査をどのように行うかについての詳細は、[赤色脱彩](https://www.smartoptometry.app/red-desaturation/)をご覧ください。
- **赤い環境：** 研究によると、外傷性脳損傷を患っている人においては、[赤い環境下で認知機能が低下する](https://pubmed.ncbi.nlm.nih.gov/20649469/)ことが示されています。

[飽和赤](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance) は特殊かつ危険なケースであり、これに対する特別なテストが存在します。外傷性脳損傷を持つ人々の認知機能に影響を与える赤い環境に加え、赤色スペクトルの波長域の色については、特別な配慮と特別な検査が必要であるようです。グレッグ・ヴァンダーハイデン博士は、「光感受性てんかん分析ツール」をテストした際、発作の発生率が予想をはるかに上回っていることに気づきました。彼らは、私たちが「飽和赤」の点滅に対して、はるかに敏感であることを突き止めました。（動画『光感受性てんかん分析ツール』[The Photosensitive Epilepsy Analysis Tool](https://www.pbs.org/video/university-place-the-photosensitive-epilepsy-analysis-tool-ep-429/)を参照のこと。）

#### 「ウェブセーフ」は「発作を起こさない」という意味ではない

色 **#990000** は「**ウェブセーフ**」と見なされていることに注意してください。これは、その色が「発作を起こさない」という意味では_決して_なく、単に、画面上で色を生成するために使用される技術によって、その色が「安全に」正確に再現できる可能性があるという意味に過ぎません。

## 危害を防止するための測定

危害の発生可能性を測定することは、良い出発点となります。テストにおいて考慮される要素には、色、輝度、サイズ、コントラスト、およびアニメーションの場合は周波数などが含まれます。WCAG 2.1 は、コンテンツを評価するための指針を示しています。

2004 年 8 月、米国てんかん財団 (Epilepsy Foundation of America) は、光感受性発作に関する専門家のコンセンサスを形成するためのワークショップを開催しました。以下の専門的かつ権威ある情報は、[光およびパターン誘発性発作：米国てんかん財団ワーキンググループによる専門家のコンセンサス](https://pubmed.ncbi.nlm.nih.gov/16146438/)に由来するものです。

> フラッシュは、輝度が 20 cd/m<sup>2</sup> 以上であり、周波数が 3 Hz 以上で発生し、固有視角が 0.006 ステラジアン以上（通常の視聴距離において、中心視野の約 10% または画面面積の 25% に相当）を占める場合、潜在的な危険要因となります。また、飽和赤色への移行、または飽和赤色からの移行もリスクとみなされる。発作を誘発する可能性があるパターンには、どの方向においても 5 組以上の明暗の縞がはっきりと識別できるものが含まれる。いかなるパターンにおいても、明暗の縞が、予想される最小視聴距離から見た際に、眼に対して 0.006 ステラジアンを超える立体角を占め、最も明るい縞の輝度が 50 cd/m2 を超え、かつパターンが 0.5 秒以上表示される場合、そのパターンは、縞の方向が変化したり、振動したり、 点滅、またはコントラストが反転する場合、そのパターンは明暗の縞のペアを 5 組以下にすべきである。パターンが変化しないか、あるいは一方向に滑らかに移動している場合は、8 組以下とする。これらの原則は、インタラクティブなメディアと比較して、例えば録画済みのテレビ番組のような固定メディアの場合、フレームごとに分析できるため、適用しやすい。

「cd/m<sup>2</sup>」とは、カンデラ毎平方メートルを指します。では、Web開発者にとって、これは色、輝度、彩度の測定値とどのように関連しているのでしょうか？

カンデラは、光度の SI 単位（国際単位系）です。これは測光学の用語であり、測光学とは人間の目によって知覚される可視光の測定を扱う学問です。ウィキペディアの[「カンデラ毎平方メートル」](https://en.wikipedia.org/wiki/Candela_per_square_metre)の記事では、開発者として馴染みのある観点、すなわちディスプレイ上および RGB 色空間における説明がなされています。これは非常に参考になります。というのも、モニター、プリンター、そしてインターネット上では、**sRGB**（標準的な赤・緑・青）という特定の規格が使用されていると想定されているからです。

> 単位面積あたりの発光量を表す指標として、この単位はディスプレイ装置の輝度を指定する際によく用いられます。モニター向けの [sRGB](https://en.wikipedia.org/wiki/SRGB) 仕様では、80 cd/m<sup>2</sup> を目標としています。通常、キャリブレーション済みのモニターの輝度は 120 cd/m<sup>2</sup> であるべきです。一般向けのデスクトップ用[液晶ディスプレイ](https://en.wikipedia.org/wiki/Liquid_crystal_display)の輝度は、200～300 cd/m<sup>2</sup> の範囲にあります。[ハイビジョンテレビ](https://en.wikipedia.org/wiki/High-definition_television)の輝度は、450～約 1500 cd/m<sup>2</sup> の範囲です。

要点は、**sRGB** 色空間は、一般的に使用される 16 進数コードから簡単に変換できるため、研究、評価ツール、開発者の間で共通の基準となっているということです。

### 考慮すべき点としてのヒトの生理学と心理学

多くの専門家が、発作の引き金となり得るウェブコンテンツの種類を、可能な限り定量化・測定しようと取り組んでいます。とはいえ、色はコンピューター画面から発せられる光の測定値であると同時に、人間の脳における知覚の問題でもあるということを忘れてはなりません。

心理的な違いに加え、私たちの間には生理的な違いも存在します。実際の人間が色や光をどのように知覚し、それにどう反応するかについては、個人差や微妙な違いが生じます。例えば、カリフォルニア州立大学ロングビーチ校のコンピュータサイエンス名誉講師であるトム・ジュエット氏は、[HSL 色空間における明度](https://colortutorial.design/hsb.html)について次のように指摘しています。「…明度のレベル間の区別は、HSL 色空間が示唆するような直線的なものではありません。私たちは、暗い色よりも明るい色の変化に対して、はるかに敏感なのです。」

光とその測定値は線形であるのに対し、人間の視覚や知覚はそうではないということを理解することが重要です。コンピュータの画面から発せられた光が、人間の目までの距離を通り、人間の視覚によってフィルターにかけられ、さらに人間の脳によって処理される過程において、機械による光の測定値をどのように関連づけるかについて、現在も調査と議論が続けられています。

年齢や性別も影響を及ぼす可能性があります。てんかん財団の記事[「てんかんの最も複雑な症状の一つである光感受性について」](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions)によると、 「小児や青年は、成人に比べて光刺激に対する異常な反応を起こしやすい傾向があり、光誘発性発作の初回はほぼ例外なく20歳未満で発生する」_。記事ではさらに、次のような統計が示されている：「女子（60％）の方が男子（40％）よりも発症率が高いが、男子の方がビデオゲームをする機会が多いため、発作の頻度は男子の方が高い。ビデオゲームには、発作を誘発する可能性のある光刺激が含まれていることが多い」。

**ユーザーテストには非常に大きな問題があります**。当然のことながら、発作を起こしやすい人をユーザーテストに参加させることを望む人は誰もいません。それは危険だからです。その点において、開発者やデザイナーができる最も倫理的な行動の一つは、医師と密接に連携してツールを開発してきたその分野の専門家によって開発されたツールを使用することです。本稿執筆時点で、研究者や医師によって倫理的かつ専門的に開発され、映像・動画向けに一般的に利用可能なツールとして、**PEAT** と**ハーディング・テスト**の 2 つがあります。

### 光感受性てんかん解析ツール (PEAT)

[Trace Research and Development Center](https://trace.umd.edu/) は、[光感受性てんかん分析ツール](https://trace.umd.edu/peat/)のゴールドスタンダードを確立しており、このツールを**無料で**ダウンロードできるようにすることに力を入れています。PEAT を利用することで、コンテンツ作成者は、自身のコンテンツに含まれるアニメーションや動画が発作を引き起こす可能性の有無を判断することができます。利用上の制限にご注意ください。**テレビ放送、映画、ホームエンターテインメント、またはゲーム業界向けに商業的に制作された素材を評価するために PEAT を使用することは禁止されています。商業目的には、ハーディング・テストまたはその他のツールをご利用ください。**

メリーランド大学の「光感受性てんかん分析ツール」の無料版を入手するには、[Trace Research & Development Center](https://trace.umd.edu/)にアクセスしてください。

![メリーランド大学情報学部の「光感受性てんかん分析ツール」。](peatversion1pt6.png)

### ハーディング・テスト

PEAT ツールの商用利用は禁止されているため、テレビ番組制作者は [HardingTest.com](https://hardingtest.com/) で提供されているハーディング・テストを利用することができます。ハーディング・テストもまた、業界のゴールドスタンダードの一つです。各国のテレビ番組制作者は、放送を行う前にこのテストに合格しなければならないため、[HardingTest.com](https://hardingtest.com/) のチームは、動画コンテンツの分析と認証の両方を提供しています。

![ハーディング フラッシュおよびパターンアナライザー。](screen_shot_2019-06-20_at_11.16.17_am.png)

## 開発者向けのアクセシビリティソリューション

すべてのアニメーションには潜在的な危険が伴います。デザイナーや開発者として、私たちには、意図的・非意図的を問わず、決して害を与えないようにする責任があります。もし、害を及ぼす可能性のある要素を組み込まなければならない場合は、ユーザーが誤ってその有害なコンテンツに遭遇しないようにすることが不可欠であり、また、ユーザーがアニメーションを防止・制御して、潜在的な害を軽減できる手段を提供する必要があります。

### ウェブ開発者ができること

#### 害を与えない

[WCAG ガイドライン 2.3 Seizures and Physical Reactions](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) には、概要として「発作や身体的反応を引き起こすことが知られているような方法でコンテンツを設計してはならない」と記述されています。ユーザーが制御できないアニメーションを含めないでください。問題を引き起こすことが知られているパターンを使ってデザインしないでください。点滅を含む GIF や PNG をどうしても含めなければならない場合は、代わりに動画形式で記録し、ユーザーが操作できるようにしましょう。ユーザーがそれを回避したり、無効にしたり、影響を軽減したりできる手段を提供してください。

#### 悪意を理解する

開発者やデザイナーの方は、ストロボ効果のあるコンテンツを本当にウェブページに掲載する必要があるのか、自問してみてください。たとえ適切に処理されていたとしても、サイトから問題のあるコンテンツをダウンロードし、それを悪用する者がいる可能性があります。アニメーションを利用してコンピュータを通じて身体的危害を加えるという、初めて記録された試みは、2008 年 3 月 22 日（土）に発生したと考えられています。当時、てんかん財団のウェブサイトが、点滅する画像や「役立つ」と偽って掲載されたリンクを含む投稿によってハッキングされました。このサイトから助けを求めていた前庭機能障害を持つユーザーたちが影響を受けました。

2016 年 12 月、てんかん患者として知られるジャーナリストのカート・アイケンウォルド氏が、アニメーション GIF を送られた後に発作を起こしたことを受け、一連の法的検討が進められています。その点滅する GIF には、「君の投稿のせいで発作を起こすのは当然だ」というメッセージが添えられていました。

#### 情報への露出を管理し、アクセスを管理する

発作を起こしやすい人が誤ってそのページに接触しないようにするためには、ページへの接触を管理することが重要です。WCAG では、たった 1 つのオブジェクトによってページ全体が利用不能になる可能性があることが指摘されています。

発作を引き起こす可能性のある画像やアニメーションが含まれていると思われる場合は、まずそのコンテンツに関する警告を表示し、その後、ユーザーがボタンをクリックするなどして明示的に同意する必要がある場所に配置するか、あるいはそのページへのリンクに明確かつ目立つ警告を表示することで、アクセスを制御してください。

検索エンジンに対して、潜在的に有害なリソースを検索インデックスに含めないよう示唆するため、クロールに関する指示を設定することを検討してください。
これを行うには、[`<meta name="robots">`](/ja/docs/Web/HTML/Reference/Elements/meta/name/robots) 要素内のメタデータを使用し、`noindex, nofollow` などの制限的なルールを指定します。
ページをインデックスに登録しない (`noindex`) ようにし、ページ内のリンクを追跡しない (`nofollow`) ようにすることで、ユーザーが検索を通じてそのページに偶然たどり着く可能性を低減できます。

```html
<html lang="en">
  <head>
    <title>…</title>
    <meta name="robots" content="noindex, nofollow" />
  </head>
  <body>
    …
  </body>
</html>
```

HTML 以外のリソースについては、HTTP の {{httpheader("X-Robots-Tag")}} レスポンスヘッダーにクロールに関する指示を設定できます。

```http
X-Robots-Tag: noindex
```

### アニメーション GIF

あらゆる種類の画像には潜在的な危険性がありますが、アニメーション GIF については、その普及率の高さと、アニメーションの再生速度が実際には GIF ファイル内で制御されているという事実から、特に言及すべきです。

#### GIF がアニメーションするかどうか検出

- npm パッケージ [animated-gif-detector](https://www.npmjs.com/package/animated-gif-detector) を使用すると、特定の HTTP リクエストにおいて、アニメーションをできるだけ早い段階で判別することができます。
- Zakirt 氏は、[animated-gif-detect.js](https://gist.github.com/zakirt/faa4a58cec5a7505b10e3686a226f285) の gist を提供しています。

アニメーション GIF を使用する場合は、ユーザーがアニメーションを再生することを選択するまで、アニメーションが非アクティブであることを確認してください。たとえば、アニメーションを開始するには、ユーザーがボタンを押すか、チェックボックスにチェックを入れる必要があります。

### 動画

アニメーション GIF の場合と同様、アニメーションを開始するには、ユーザーがボタンを押すか、チェックボックスにチェックを入れる必要があります。これを行う方法はいくつかあり、例えば、`<video controls>` に [`autoplay`](/ja/docs/Web/API/HTMLMediaElement/autoplay) 属性を追加しないことや、初期状態として {{CSSxRef('animation-play-state')}} を `paused` に設定することなどが挙げられます。これが実際にどのように機能するかの優れた例については、Kirupa による記事[「アニメーションのオン/オフの切り替え」](https://www.kirupa.com/html5/toggling_animations_on_off.htm)をご覧ください。Kirupa は、`animation-play-state` を {{CSSxRef('transition')}}、{{CSSxRef('transform')}}、[`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) と組み合わせて使用し、ユーザーが制御できる非常にアクセシブルな体験を実現しています。

{{cssxref("animation-play-state")}} は、アニメーションを実行するか一時停止するかを指定する CSS プロパティです。

```css
div {
  animation-play-state: paused;
}
```

[CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)を使用する場合は、アニメーションの初期段階の再生時間をゼロに設定することができます

```css
div {
  transition-duration: 0s;
}
```

### ユーザーがアニメーションを開始できるだけでなく、停止することもできるようにする

属性が指定されていない {{HTMLElement('video')}} 要素は自動再生されず、再生コントロールも表示されません。ユーザーが動画の再生を開始できるだけでなく、停止もできるようにするため、video 要素に `controls` 属性を必ず追加してください。

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.ogg" type="video/ogg" />
  このブラウザーは video タグに対応していません。
</video>
```

#### プログラムによって、コントロールが利用可能であることを保証する

`HTMLMediaElement.controls` プロパティは、HTML の `controls` 属性を反映しており、この属性によって、メディア項目の再生用のユーザーインターフェイスコントロールが表示されるかどうかが決まります。

##### 動画

動画にユーザーが操作できるコントロールが確実に含まれるようにするには、HTML の video 要素および audio 要素に "controls" というキーワードを追加してください。

`<video controls>`

```html-nolint
<video controls>
  <source src="myVideo.mp4" type="video/mp4" />
  <source src="myVideo.webm" type="video/webm" />
  <p>
    このブラウザーは HTML 動画に対応していません。代わりに<a href="myVideo.mp4">動画へのリンク</a>を使用してください。
  </p>
</video>
```

##### 音声

その例をそのままオーディオに応用すると、こうなります。

`<audio controls>`

```html-nolint
<audio controls>
  <source src="myAudio.ogg" type="audio/ogg" />
  <source src="myAudio.mp3" type="audio/mpeg" />
  <p>
    このブラウザーは audio 要素に対応していません。代わりに<a href="myAudio.mp3">音声へのリンク</a>を使用してください。
  </p>
</audio>
```

##### 動画の一部としての音声

なお、動画の音量は、コンテンツが {{HTMLElement('audio')}} 要素ではなく {{HTMLElement('video')}} 要素内に含まれている場合でも、`muted` コンテンツ属性によって制御できることに注意してください。この例は、HTML Living Standard の [muted メディア属性](https://html.spec.whatwg.org/multipage/media.html#concept-media-muted)に関する説明セクションからのものです。これによると、ユーザーが音量をオンにする操作を行うまで、動画はバックグラウンドで音声を消した状態で自動再生されることが説明されています。

```html
<video src="adverts.cgi?kind=video" controls autoplay loop muted></video>
```

### 速度の制御

これは当然のことのように思えますが、MIME タイプは非常に多いため、その処理方法は大きく異なり、そのためこの問題に対する万能な解決策は存在しません。さらに、ファイルの分類方法そのものが、その処理方法を複雑にしているという事実も、事態をさらに難しくしています。例えば、.gif ファイル形式は通常、画像として認識されていますが、アニメーション表示が可能なことから、一部の分野では動画ファイル形式とも見なされています。メディア種別の包括的な一覧については、[IANA.org のメディア種別に関するページ](https://www.iana.org/assignments/media-types/media-types.xhtml)をご覧ください。

それらを検知する方法は、決して簡単な作業ではありません。whatwg.org の [MIME スニッフィング](https://mimesniff.spec.whatwg.org/)標準を参照すると参考になるかもしれません。ほぼあらゆる種類の画像をアニメーション化できますが、アニメーションの方法はさまざまであり、それゆえ、アニメーションの制御方法も異なります。

#### よくアニメーションするファイル形式

- **ビットマップ**: アニメーション
- **キャンバス**: MDN のキャンバスに関するチュートリアルには、[基本的なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations)について解説した素晴らしいセクションがあります。`setInterval()` はキャンバスアニメーションの定番ですが、これが画面のリフレッシュとどのように相互作用するかを理解するのも興味深いことです。記事 [requestAnimationFrameでfpsを制御する？](https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe) では、画面のリフレッシュを背景に、`requestAnimationFrame` を実装するための具体的な仕組みについて解説されています。
- **GIF (ラスター)**: GIF ファイル自体にアニメーションの制御機能が組み込まれているため、これを解読するのは困難です。GIF の再生速度の制御に関する詳細については、W3C の [G152: アニメーションGIF画像の点滅をnサイクル（5秒以内）後に停止させる設定](https://www.w3.org/TR/WCAG20-TECHS/G152.html)<sup>(英語)</sup>をご覧ください。このテーマに関する Stack Overflow の優れた記事として、[JavaScript で GIF アニメーションを制御できますか？](https://stackoverflow.com/questions/2385203/can-you-control-gif-animation-with-javascript)<sup>(英語)</sup>があります。
- **GIFV (ラスター)**: GIF のバリエーション、つまり動画版と見なされています。この形式は標準化されておらず、別の場所に存在する「実際の」動画ファイル（例：.webm ファイル）を参照する必要があります。
- **JPG (ラスター)**
- **MNG (ラスター)**: Multiple-image Network Graphics (MING) は、アニメーション画像用のグラフィックスファイル形式です。一部では動画形式とも見なされています。
- **PNG, APNG (ラスター)**: Portable Network Graphics と Animated Portable Network Graphics はどちらもアニメーションすることがあります。
- **SVGs (Vector)**: MDN のドキュメント [SVG: Scalable Vector Graphics](/ja/docs/Web/SVG) では、「SVG はテキストベースのオープンなウェブ標準です。これは、[CSS](/ja/docs/Web/CSS)、[DOM](/ja/docs/Web/API/Document_Object_Model)、[SMIL](/ja/docs/Web/SVG/Guides/SVG_animation_with_SMIL) といった他のウェブ標準と連携するように明示的に設計されています。」と記載されています。SVGは `<img src="example.svg" alt="SVGをソースとして使用した画像">` のように画像として使用できます。つまり、SVG の外観やアニメーションは、CSS のキーフレームやアニメーションを通じて制御できます。JavaScript との連携については、MDN の [SVG インターフェース](/ja/docs/Web/API/Document_Object_Model#svg_dom) および [HTML コンテンツへの SVG 効果の適用](/ja/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content) のドキュメントを参照してください。
- **Voxel (ラスター)**: 三次元[ボクセル](https://en.wikipedia.org/wiki/Voxel)ラスターグラフィックは、ビデオゲームだけでなく、医療用画像処理の分野でも活用されています。

#### テキストもアニメーションできる

翻訳や変換処理によって、div 内のテキストにアニメーションが適用されることがありますが、これは悪影響を及ぼす可能性があります。テキストの移動は、動画の移動と同じ理由で発作を引き起こす恐れがあるため、テキストのアニメーションは避けてください。いずれにせよ、動くテキストの使用は避けるのが賢明です。多くのスクリーンリーダーは動くテキストを読み上げることができず、視覚障害や前庭機能障害のないユーザーにとっても、ユーザー体験を損なうものとなるからです。

### アニメーション向けの CSS

スタイルシートや {{HTMLElement('style')}} 要素内では、多くのオプションを組み合わせて、ユーザーに優れた体験を提供することができます。このドキュメントの前半で、すでに `animation` プロパティについて触れました。これは実際には、以下を含むすべてのアニメーションプロパティの一括指定です。

- `animation-play-state`
- `animation-duration` の値は `<time>` です。これは、アニメーションが 1 サイクルを完了するのにかかる時間です。この値は、秒 `(s)` またはミリ秒 `(ms)` で指定できます。デフォルト値の `0s` は、アニメーションが行われないことを示します。
- `animation-timing-function`

animation プロパティはそれ自体でも強力ですが、`prefers-reduced-motion` などの他のプロパティやクエリーと組み合わせることで、ユーザー向けに強力なオプションセットを構築することができます。`animation: none` や `transition: none` に設定するのではなく、`animation-duration` や `transition-duration` プロパティを短い時間に設定することで、アニメーションの実行に依存している部分がある場合に問題が発生するのを防ぐための安全策となります。

### JavaScript アニメーション

JavaScript は、{{HTMLElement('canvas')}} 要素や SVG を制御するためによく使用されます。HTML ビデオに適用される JavaScript コードのほとんどは、オーディオにも適用されます。`HTMLMediaElement.playbackRate` を使用すると、ビデオとオーディオの両方について、再生速度を制御するユーザーコントロールを実装できます。デフォルト値は 1.0 で、これは通常速度とみなされます。0.5 は半分の速度、2.0 は 2 倍の速度です。負の数値を指定すると、動画や音声が逆再生されます。再生速度プロパティは `HTMLMediaElement.playbackRate = playbackSpeed` のように設定します。

[document.getAnimations()](/ja/docs/Web/API/Document/getAnimations) は実験的な技術であり、[CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)、 [CSS トランジション](/ja/docs/Web/CSS/Guides/Transitions)、[ウェブアニメーション](/ja/docs/Web/API/Web_Animations_API)が含まれます。[Document.getAnimations()](/ja/docs/Web/API/Document/getAnimations) に関する MDN のページでは、ページ上のすべてのアニメーションの速度を半分の速度に遅くする方法として、以下のコードサンプルが提供されています。

```js
document.getAnimations().forEach((animation) => {
  animation.playbackRate *= 0.5;
});
```

#### アニメーションの画像ソース

最も簡単な方法の一つは、既存の画像を画像ソースとして使用し、それをアニメーションさせることです。なお、お使いの環境で許可されているファイル形式およびサイズであれば、GIF、JPG、PNG、SVG などのファイル形式を画像ソースとして使用できます。ただし、セキュリティ上の懸念から、SVG は多くの場合使用が許可されていません。MDN のドキュメント[基本的なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations)には、太陽、地球、月それぞれに複数の画像ソースを使用し、いくつかのキャンバスメソッドを使って、太陽の周りを公転する地球や、地球の周りを公転する月の速度やアニメーションを制御する、素晴らしい例が紹介されています。このチュートリアルで提供されている Codepen を使用して、コード内の `ctx.rotate` を調整し、変更を加えた際にアニメーションがどのように変化するかを確認してみてください。

#### どうしても、どうしても点滅するアニメーションを使わなければならないという場合は……

必ず操作ボタンが付いていることを確認してください。ユーザーが最初にそれを見たときはオフになっていること、そしてアニメーションを見るにはユーザーが明示的に許可する必要があることを確認してください。

ユーザーが操作できない形式の例として、GIF ファイルが挙げられます。アニメーションの再生速度はGIF画像自体の中で制御されます。アニメーション GIF を動画に変換することで、アニメーションに操作ボタンを追加でき、ユーザーに選択の余地を与えることができます。[EZGif](https://ezgif.com/) や [GIF to MP4](https://gif-2-mp4.com/) など、無料で利用できるオンラインコンバーターは数多くあります。

#### ユーザーの期待値の設定

ユーザーがリンクをクリックする前に、何が起こるかを事前に伝えてください。その後表示されるアニメーションについて説明してください。詳しくは、[WCAG 2.2 達成基準 3.2.5 Change on Request](https://w3c.github.io/wcag/guidelines/22/#change-on-request)<sup>(英語)</sup>を参照してください。

#### 規模を小さく保つ

どうしても点滅効果が必要である場合は、その範囲を小さくしてください。一般的に、点滅領域のサイズはおよそ 341 x 256 ピクセル以下に制限してください。このピクセルサイズは、視聴者が画面から通常の距離に位置していることを前提としています。前述の通り、VR ヘッドセットなど、至近距離で画像を閲覧する場合は、このサイズでも大きすぎる可能性があります。WebVR は、ブラウザ上で VR を体験できるようにするオープンな仕様です。WebVR は、スマートフォン、コンピュータ、またはヘッドセットで体験できます。
Firefox Reality（仮想現実用のブラウザー）のように、アイマスクを使用する、**またはアイマスクで使用可能な**ゲームやVR向けにデザインする場合は、画像がユーザーの目にはるかに近くなるため、長方形のサイズを 341 x 256 ピクセルよりはるかに小さくするようにしてください。

#### コントラストを下げる

通常、アクセシビリティの観点からは、コントラストが高いほど良いとされています。テキストの色と背景色のコントラスト（W3.org の[コントラストの良い色](https://www.w3.org/WAI/perspective-videos/contrast/)に関するページによると、技術的には明度コントラスト比と呼ばれます）が高ければ高いほど、そのコンテンツは読みやすくなります。視力の弱いユーザーは、背景に対するテキストのコントラストを高く保つための取り組みを特に高く評価しています。しかし、コンテンツにアニメーションが含まれる場合、**コントラストを下げる**ことは、実際にはそのアニメーションがてんかん発作を引き起こす可能性を減らす方法となります。1 秒間に 3 回の点滅が検出された場合は、コントラスト比を下げてください。
コントラスト比は、[WCAG 2.2](https://w3c.github.io/wcag/guidelines/22/) において次のように定義されています：

- _コントラスト比_
  - : (L1 + 0.05) / (L2 + 0.05), ここで
    - L1 は、2 つの色のうち明るい方の色の[相対輝度](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance)であり、
    - L2 は、2 つの色のうち暗い方の[相対輝度](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance)です。

ウェブにアップロードしたり公開したりする前に、コントラストを調整しておくのが最善です。動画やアニメーション GIF については、Adobe 製品群が非常に優れたツールとなります。また、静止画については、pinetools.com の[明るさとコントラストのオンライン調整](https://pinetools.com/brightness-contrast-image)というオンラインツールが利用可能です。例えば、アニメーション GIF を作成する場合は、コントラスト比の低い画像から始めることをお勧めします。

JavaScript も、コントラストを動的に調整するための選択肢の一つです。以下は、[例：段落の背景色の設定](/ja/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#setting_the_background_color_of_a_paragraph)というセクションからのコード例です。この例では、色が **RGB** 色空間で記述されている点に注意してください。

**HTML コンテンツ [(ソースページへリンク)](/ja/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#html_2)**

```html
<body>
  <input type="button" value="段落の背景色を設定" />
  <p>hi</p>
  <p>hello</p>
</body>
```

**JavaScript コンテンツ [(ソースページへリンク)](/ja/docs/Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree#javascript_2)**

```js
function setBackground() {
  // now, get all the p elements in the document
  const paragraphs = document.getElementsByTagName("p");

  // get the second paragraph from the list
  const secondParagraph = paragraphs[1];

  // set the inline style
  secondParagraph.style.background = "red";
}

document.querySelector("input").addEventListener("click", setBackground);
```

#### 点滅するコンテンツには完全飽和の赤色を使用しない

本資料の前述の通り、米国てんかん財団は 2004 年 8 月にワークショップを開催し、光感受性発作に関する専門家のコンセンサスの策定に着手しました。その結果として、「フラッシュは、輝度が 20 cd/m2 以上、発生頻度が 3 Hz 以上、かつ固有視角が 0.006 ステラジアン以上（通常の視聴距離において、中心視野の約 10%、または画面面積の 25% に相当）である場合、潜在的な危険となる。また、飽和赤色への変化、あるいは飽和赤色からの変化も危険因子とみなされる。」同コンセンサスでは、さらに「輝度にかかわらず、飽和赤色への変化、あるいは飽和赤色からの変化も危険因子とみなされる。」と指摘しています。

### 代替の CSS スタイルの指定

アニメーションや点滅の多くは CSS の手法で制御できることを踏まえ、ユーザーに代替オプションを提供する方法を探るとともに、それらのオプションの制御を便利かつ分かりやすくすることが重要です。

#### 代替スタイルシート

最新のブラウザーでは、ユーザーが代替スタイルシートの場所を知っていれば、そこに含まれる代替 CSS が表示されます。場合によっては、「表示」メニューから代替スタイルが表示されることもあれば、設定画面で表示されることもあり、あるいはその両方の場合もあります。すべてのユーザーがブラウザーや設定画面を通じてこれらのオプションを探す方法を知っているわけではないため、ユーザーがすぐに気づけるように、スタイルを変更するための目立つボタンやリンクを用意するなど、従来の方法を採用することも検討する価値があります。そうしても、ブラウザーが代替スタイルシートを読み取る機能や、ユーザーが設定で好みを設定する機能と競合したり、それらを上書きしたりすることはありません。

音声認識システムに依存しているユーザーなど、一部のユーザーは、障害のためにマウスを使用できない場合や、モバイルタブレットでのタッチ操作を利用できない場合があり、従来のボタンやリンクに頼ることが多いことを知っておくことが重要です。

HTML ドキュメントに代替スタイルシートを組み込む一般的な方法としては、{{HTMLElement('link')}} 要素や {{CSSxref('@import')}} を使用する方法があります。

#### {{HTMLElement('link')}} 要素

ウェブページの {{HTMLElement('head')}} セクション内で、{{HTMLElement('link')}} 要素を使用し、`rel="alternate stylesheet"` 属性およびタイトル用の `title="…"` 属性を併せて指定してください。

```html
<head>
  <title>Home Page</title>
  <link href="main.css" rel="stylesheet" title="Default Style" />
  <link
    href="alternate1.css"
    rel="alternate stylesheet"
    title="Alternate One" />
  <link
    href="alternate2.css"
    rel="alternate stylesheet"
    title="Alternate Two" />
</head>
```

**{{CSSxref('@import')}}** もスタイルシートを組み込む方法の一つですが、{{HTMLElement('link')}} 要素ほど広く対応されているわけではありません。

```css
@import "alternate1.css";
@import "alternate2.css";
```

別のスタイルシートを使用することで（タイトルを追加することを忘れないでください）、ユーザーがブラウザーを使って別のスタイルを選択できるように設定することになります。

### 動的なスタイルの切り替え

ブラウザーに依存して代替スタイルを表示させることの問題点の一つは、すべてのユーザーが技術的に精通しているわけではなく、代替スタイルを見つけ出せない場合があることです。あるいは、障害のせいでそれができない場合もあります。ボタンやリンクがあれば、多くのユーザーにとって選択肢があることが一目でわかり、喜ばれるでしょう。ユーザーが別のスタイルシートに切り替えられるように、トグルボタンを追加する方法は数多くあります。とはいえ、代替スタイルシートの使用だけが唯一の選択肢というわけではありません。もう一つの選択肢は、ページ自体のスタイルを操作することです。MDN のドキュメント[動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)によると、「可能な場合は、[`className`](/ja/docs/Web/API/Element/className) プロパティを介してクラスを動的に操作することが、真のベストプラクティスです。なぜなら、すべてのスタイリングフックの最終的な外観を単一のスタイルシートで制御できるからです」この方法に関する最も優れた例の一つは、W3C のページにある ["C29: Using a style switcher to provide a conforming alternate version"](https://www.w3.org/TR/WCAG20-TECHS/C29.html) です。

### 極端なケース：テキストのみの代替案

画像が表示されないようにする、独立した代替スタイルシートを作成するのは簡単です。これは過酷な解決策ですが、極端な過敏症を持つ人々に対応しなければならない学校の教師やその他の公務員にとっては、時に必要な手段となります。こうした公務員は、開発者に `display: none` を使用した特別な代替スタイルシートの作成を依頼することができます。CSS を使ってこれを行う方法は以下の通りです。

```css
img {
  display: none;
}
```

#### メディアクエリーを {{HTMLElement('style')}} で活用

メディアクエリーを設定することで、ユーザーによる操作が可能になります。これらの操作機能は、ブラウザーまたは OS 上で利用できます。ユーザーがこれらの操作機能にアクセスする方法の詳細については、MDN のドキュメント[アクセシビリティ：ユーザーがより安全にブラウジングを行うためにできること](/ja/docs/Web/Accessibility/Guides/Browsing_safely)を参照してください。

#### `prefers-reduced-motion`

`prefers-reduced-motion` の対応は最近のブラウザーで拡大しつつあります。

```css
@media screen and (prefers-reduced-motion: reduce) {
}
@media screen and (prefers-reduced-motion) {
}
```

`prefers-reduced-motion` コードの使用方法に関する優れた例については、MDN のドキュメント [`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) を参照するか、[Chrome 74 の新機能](https://developer.chrome.com/blog/new-in-chrome-74/)の節にある以下の例をご覧ください。

```css
button {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  button {
    animation: none;
  }
}
```

#### `prefers-color-scheme`

これは、環境光 API が利用できない場合に有益です。対応状況は徐々に広がりつつあります。

```css
@media (prefers-color-scheme: dark) {
  /* adjust styles for dark mode */
}
```

#### Window.matchMedia()

開発者には、`Window.matchMedia()` を通じて利用できる強力なツールがあります。参考になる資料として、MDNの [`Window.matchMedia()`](/ja/docs/Web/API/Window/matchMedia) に関するドキュメントが挙げられます。

#### メディア更新機能

画面のリフレッシュレートが高いほど、人間の目には安定して現れ、「ちらつき」も少なくなります。現行の技術のほとんどは、光過敏症の問題を発生させないリフレッシュレートで動作しています。しかし、誰もが最新技術を購入できるほど裕福というわけではありません。古いコンピューターや性能の低いコンピューターでは、リフレッシュレートが低い場合があります。[AbilityNet's Factsheet (November 2015) Computers and Epilepsy](https://www.abilitynet.org.uk/sites/abilitynet.org.uk/files/Epilepsy%20and%20Computing%20Nov%202015.pdf) では、リフレッシュレートに関する詳細がさらに説明されています。

とても古い記事である Tech Republic の ["Epilepsy and CRT/LCD screen flicker"](https://www.techrepublic.com/forums/discussions/epilepsy-and-crt-lcd-screen-flicker/) には、リフレッシュレート (Hz) に関する興味深いレスポンスが寄せられていました。

- _「この効果は、70 Hzまで顕著であり、文書化されている。」_
- _「これらの研究結果から、70 Hz 未満のリフレッシュレートは避け、10 で割り切れないリフレッシュレートを使用すべきと示唆される。」_

CSS-Tricks のエリック・ベイリー氏は、更新機能の革新的な活用法を探しました。これは、animation-duration や transition-duration と組み合わせて使用することで、人間の目には感知できない速度で処理を完了させるものです。言い換えれば、エリック氏のテクニックはリフレッシュレートの問題に対処するものです。下記 CSS は、CSS-Tricks の記事 [" Revisiting prefers-reduced-motion, the reduced motion media query"](https://css-tricks.com/revisiting-prefers-reduced-motion/) からのものです。

```css
@media screen and (prefers-reduced-motion: reduce), (update: slow) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important; /* Hat tip Nick/cssremedy (https://css-tricks.com/revisiting-prefers-reduced-motion/#comment-1700170) */
    transition-duration: 0.001ms !important;
  }
}
```

[`update`](/ja/docs/Web/CSS/Reference/アットルール/@media/update) メディア特性は、コンテンツがレンダリングされた後に、出力端末がその外観を変更できるかどうかを問い合わせるために使用されます。この特性には、"none"、"slow"、"fast" という値があります。

## 開発・実験の機能

### メディアクエリーレベル 5

EnvironmentMQ（メディアクエリーレベル 5 で計画中）

- `light-level`
  - : [`light-level`](https://drafts.csswg.org/mediaqueries-5/#light-level) には、dim、normal、washed の 3 つの有効な値があります。興味深いことに、仕様書では、これらの 3 つのレベルをルクス単位で仕様上定義することを控えています。これは、光センサーを搭載した端末が通常、画面の明るさを自動的に調整するためです。同時に、仕様書では、明るい日差しの下でも読み取り可能なe-inkと、そうでない液晶といった、技術的な違いについても言及されています。
- `environment-blending`
  - : W3C の草案ドキュメント Media Queries Level 5 より：「[`environment-blending`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-environment-blending) メディア特性は、ユーザーのディスプレイの特性を照会し、作成者が文書のスタイルを調整できるようにするために使用されます。作成者は、表示技術に応じてページの視覚的要素やレイアウトを調整し、魅力を高めたり、読みやすさを改善したりすることができます。」

#### ユーザー環境設定によるメディア特性（メディアクエリーレベル 5 で計画中）

 [メディアクエリーレベル 5 の草案文書](https://drafts.csswg.org/mediaqueries-5/)<sup>(英語)</sup> の[ユーザー環境設定によるメディア特性](https://drafts.csswg.org/mediaqueries-5/#mf-user-preferences)は、ユーザーがメディアを制御できるという点で特に有望です。その主な特徴を以下に示します。

- `inverted-colors`
  - : この節によると、[ユーザーの環境設定に基づくメディア特性](https://drafts.csswg.org/mediaqueries-5/#mf-ユーザーの環境設定)によると、「[`inverted-colors`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-inverted-colors) メディア特性は、コンテンツが通常通り表示されるか、あるいは色が反転して表示されるかを示します。」
- [`forced-colors`](/ja/docs/Web/CSS/Reference/At-rules/@media/forced-colors)
  - : [`forced-colors-mode`](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode) では、ユーザーエージェントは、作成者が選択した色を上書きして、ユーザーが指定したカラーパレットをページに強制的に適用します。W3C のメディアクエリーレベル 5 の草案文書の forced-colors に関する節には、次のように記載されています。「forced-colors メディア特性は、ユーザーエージェントが [forced colors モード](https://drafts.csswg.org/css-color-adjust-1/#forced-colors-mode)を有効にしているかどうかを検出するために使用されます。このモードでは、ユーザーが選択した限定されたカラーパレットがページに強制的に適用されます」。 ユーザーにはこの機能について周知する必要があるが、また、prefer-color-scheme メディアクエリーの適切な値と適切に連携する必要があります。
- `light-level`
  - : W3C のメディアクエリーレベル 5 の草案文書の light-level に関する章より：「[`light-level`](https://drafts.csswg.org/mediaqueries-5/#descdef-media-light-level) メディア特性は、端末が使用されている周囲の照度をクエリーするために使用され、作成者がそれに応じてドキュメントのスタイルを調整することができるものです。」 これは、運動機能に問題がある方や、認知障害を抱える方など、画面設定を変更するための適切な「ボタン」を探せない人々にとって、まさに天の恵みとなるでしょう。
- prefers-contrast
  - : W3C のメディアクエリーレベル 5 の草案文書の [`prefers-contrast`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) に関する節より：「`prefers-contrast`メディア機能は、ユーザーが隣接する色間のコントラストを強くするか弱くするか、システムに要求しているかどうかを検出するために使用されます。例えば、多くのユーザーは、テキストと背景のコントラストの差が小さいとテキストを読みづらく感じ、より大きなコントラストを推奨する傾向があります。」 ただし、コントラストが強すぎると、テキストの周囲にハロー現象が発生し、かえって可読性が低下してしまう場合もあります。コントラストの程度をユーザーが制御できるようにすることは、アクセシビリティの観点から間違いなく有益な機能です。

#### `MediaQueryList` インターフェイス

CSSWG.org の草案のセクション 4.2 は、HTML で定義されている[イベントループ](https://html.spec.whatwg.org/multipage/webappapis.html#event-loop)と連携しています。[`MediaQueryList`](https://drafts.csswg.org/cssom-view/#mediaquerylist) オブジェクトに関する [HTML](https://drafts.csswg.org/cssom-view/#biblio-html) です。情報については、MDN ドキュメントの [MediaQueryList](/ja/docs/Web/API/MediaQueryList) を参照してください。

#### 個人設定に関するヘルプとサポート

`literal` プロパティの要件は、[WAI-Adapt: ヘルプとサポート](https://w3c.github.io/adapt/help/#literal-explanation) に基づいています。

**要件：** 一部のユーザーは、比喩や慣用句など、文字通りの意味ではないテキストや画像を理解できない場合があります。`literal` プロパティは、テキストや画像を文字通りの意味ではないものとして識別することを意図しており、作成者がユーザーに対して、文字通りの意味ではないテキストや画像について説明することができるものです。

## 関連情報

### MDN

- [アクセシビリティ: どのような個人設定が、より安全なウェブ閲覧に役立つのか](/ja/docs/Web/Accessibility/Guides/Browsing_safely)
- [ウェブアクセシビリティ: 色と輝度を理解する](/ja/docs/Web/Accessibility/Guides/Colors_and_Luminance)
- [SVG 効果の HTML コンテンツへの適用](/ja/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
- [基本的なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations) （キャンバスチュートリアル）
- [キャンバス API](/ja/docs/Web/API/Canvas_API)
- [CanvasRenderingContext2D.drawImage()](/ja/docs/Web/API/CanvasRenderingContext2D/drawImage)
- {{cssxref("&lt;color&gt;")}}
- [ドキュメントオブジェクトモデル](/ja/docs/Web/API/Document_Object_Model)
- [MediaQueryList](/ja/docs/Web/API/MediaQueryList)
- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [WebGL: ウェブの 2D および 3D グラフィック](/ja/docs/Web/API/WebGL_API)
- [WebVR API](/ja/docs/Web/API/WebVR_API)

### 色

- [Color Tutorial: describing color](https://colortutorial.design/) Tom Jewett
- [Formula to Determine Brightness of RGB color](https://stackoverflow.com/questions/596216/formula-to-determine-perceived-brightness-of-rgb-color) Stack Exchange Discussion Thread
- [How the Color Red Influences Our Behavior](https://www.scientificamerican.com/article/how-the-color-red-influences-our-behavior/) Scientific American By Susana Martinez-Conde, Stephen L. Macknik on November 1, 2014

### 議論

- [Problems with WCAG 2.0 Flash Definition #553](https://github.com/w3c/wcag/issues/553)
- [WCAG 2.1 Understanding 2.3.1 - missing/vague dimension definitions #585](https://github.com/w3c/wcag/issues/585)

### てんかんと発作

- [Shedding Light on Photosensitivity, One of Epilepsy's Most Complex Conditions](https://www.epilepsy.com/stories/shedding-light-photosensitivity-one-epilepsys-most-complex-conditions) Epilepsy Foundation: _"Certain individuals are born with special sensitivity to flashing lights or contrasting visual patterns, such as stripes, grids and checkerboards. Because of this condition, their brain will produce seizure-like discharges when exposed to this type of visual stimulation."_
- [Gamma oscillations and photosensitive epilepsy](https://www.sciencedirect.com/science/article/pii/S0960982217304062?via%3Dihub) Current Biology [Volume 27, Issue 9](https://www.sciencedirect.com/journal/current-biology/vol/27/issue/9), 8 May 2017, Pages R336-R338: _"Certain [visual images](https://www.sciencedirect.com/topics/biochemistry-genetics-and-molecular-biology/retina-image), even in the absence of motion or flicker, can trigger seizures in patients with photosensitive epilepsy."_
- [Photosensitive Seizures. Cedars-Sinai](https://www.cedars-sinai.org/health-library/diseases-and-conditions/p/photosensitive-seizures.html) "_Photosensitive seizures are triggered by flashing or flickering lights. These seizures can also be triggered by certain patterns such as stripes._"
- [Photic-and pattern-induced seizures: expert consensus of the Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/16146438/) Eplepsia 2005 Sept, 46(9):1423-5 PubMed.gov NCBI [Harding G](https://pubmed.ncbi.nlm.nih.gov/?term=Harding%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Wilkins AJ](https://pubmed.ncbi.nlm.nih.gov/?term=Wilkins%20AJ%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Erba G](https://pubmed.ncbi.nlm.nih.gov/?term=Erba%20G%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Barkley GL](https://pubmed.ncbi.nlm.nih.gov/?term=Barkley%20GL%5BAuthor%5D&cauthor=true&cauthor_uid=16146438), [Fisher RS](https://pubmed.ncbi.nlm.nih.gov/?term=Fisher%20RS%5BAuthor%5D&cauthor=true&cauthor_uid=16146438); [Epilepsy Foundation of America Working Group](https://pubmed.ncbi.nlm.nih.gov/?term=Epilepsy%20Foundation%20of%20America%20Working%20Group%5BCorporate%20Author%5D).

### GPII

- [Accessibility Master List](https://ds.gpii.net/learn/accessibility-masterlist) Gregg Vanderheiden Ph.D. Editor

### ISO

- [IEC 61966-2-2:2003(en)](https://www.iso.org/obp/ui/#iso:std:iec:61966:-2-2:ed-1:v1:en) Multimedia systems and equipment — Colour measurement and management — Part 2-2: Colour management — Extended RGB color space — scRGB

### 光刺激性てんかん解析ツール

ハーディングツールと並んで、フラッシュを分析するための 2 つの「ゴールド標準」のうちの 1 つとして広く認識されています。

- [Trace Research and Development Center](https://trace.umd.edu/peat/)
- [Using PEAT To Create Seizureless Web Animations](https://www.useragentman.com/blog/2017/04/02/using-peat-to-create-seizureless-web-animations/)

### W3C

- [WAI-Adapt Explainer](https://w3c.github.io/adapt/)
- [WAI-Adapt: Tools Module](https://www.w3.org/TR/adapt-tools/) Working Draft
- [Three Flashes or Below Threshold Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) Understanding WCAG 2.0 (Older, but contains some explanations of references made in the WCAG 2.1 criteria)
- [Three Flashes or Below Threshold Understanding Success Criterion 2.3.1](https://www.w3.org/WAI/WCAG21/Understanding/three-flashes-or-below-threshold.html) Understanding WCAG 2.1
- [Understanding Success Criteria 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Web Content Accessibility Guidelines (WCAG) 2.2](https://w3c.github.io/wcag/guidelines/22/#dfn-relative-luminance) definition of relative luminance
