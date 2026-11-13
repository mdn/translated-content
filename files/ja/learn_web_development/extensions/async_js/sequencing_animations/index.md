---
title: "課題: アニメーションを順番に再生する"
slug: Learn_web_development/Extensions/Async_JS/Sequencing_animations
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}

この評価では、一連のアニメーションを順番に再生するためにページを更新します。これを行うには、[プロミスの使い方](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises)の記事で学んだテクニックのいくつかを使用します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        JavaScript の基本と、プロミスベースの API を使用する方法を適度に理解していること。
      </td>
    </tr>
    <tr>
      <th scope="row">目的:</th>
      <td>プロミスベースの API を使用する方法の理解度をテストすること。</td>
    </tr>
  </tbody>
</table>

## 開始点

<https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start>にあるファイルのローカルコピーを作成ししてください。 4 つのファイルが含まれています。

- alice.svg
- index.html
- main.js
- style.css

編集するファイルは、 "main.js" だけです。

ブラウザーで "index.html" を開くと、 3 つの画像が斜めに配置されているのがわかるでしょう。

![アニメーションを順番に再生する評価ページのスクリーンショット](./sequencing-animations.png)

画像は、[ウェブアニメーション API を使用する](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)のガイドから引用しています。

> [!NOTE]
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## プロジェクト概要

このページを、 3 つの画像すべてにアニメーションを適用し、 1 つずつ順番に更新していくように更新してください。つまり、最初の画像が終了したら 2 つ目の画像を、 2 つ目の画像が終了したら 3 つ目の画像をアニメーションさせるわけです。

このアニメーションは、すでに "main.js" で定義されているもので、画像を回転させ、消えるまで縮小させるだけです。

このページがどのように動作するかをもっと理解してもらうために、[完成例を見てください](https://mdn.github.io/learning-area/javascript/asynchronous/sequencing-animations/finished/)。アニメーションは一度しか実行されないことに注意してください。もう一度実行させたい場合は、ページを再読み込みしてください。

## 完成までのステップ

### 最初の画像をアニメーションさせる

画像のアニメーションには[ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) を使用しており、具体的には {{domxref("Element/animate", "element.animate()")}} メソッドを使用しています。

"main.js" を更新して、以下のように `alice1.animate()` の呼び出しを追加してください。

```js
const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);
```

ページを再読み込みすると、最初の画像が回転したり縮小したりするのがわかるはずです。

### すべての画像をアニメーションさせる

次に、`alice1` が終了したら `alice2` を、 `alice2` が終了したら `alice3` をアニメーションさせたいと思います。

`animate()` メソッドは {{domxref("Animation")}} オブジェクトを返します。このオブジェクトには `finished` プロパティがあり、これはアニメーションの再生が完了したときに履行される `Promise` です。つまり、次のアニメーションを開始するタイミングを知るために、このプロミスを使用することができます。

この実装を行うためにいくつかの異なる方法を試し、プロミスを使用する方法を強化していただきたいと思います。

1. 最初に、動作するものを実装するのですが、[コールバックを使用する際の注意点](/ja/docs/Learn_web_development/Extensions/Async_JS/Introducing#コールバック)で見た「コールバック地獄」問題のプロミス版があります。

2. 次に、これを[プロミス連鎖](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises#プロミスの連鎖)として実装しましょう。[アロー関数](/ja/docs/Learn_web_development/Core/Scripting/Functions#アロー関数)で使用できる形が異なるため、この書き方はいくつかあることに注意してください。どれが一番簡潔でしょうか？どれが一番読みやすいと感じますか？

3. 最後に [`async` と `await`](/ja/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await) を使用して実装しましょう。

`element.animate()` は `Promise` を返すのではないことに注意してください。 `Promise` である `finished` プロパティを持つ `Animation` オブジェクトを返すのです。

{{PreviousMenu("Learn_web_development/Extensions/Async_JS/Introducing_workers", "Learn_web_development/Extensions/Async_JS")}}
