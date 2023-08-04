---
title: HTMLMediaElement.readyState
slug: Web/API/HTMLMediaElement/readyState
l10n:
  sourceCommit: 23aea0fbb04893c64890c89a634250283e2beb71
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.readyState`** プロパティは、メディアの準備状態を示します。

## 値

`unsigned short` 型です。 可能な値は次のとおりです。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">定数</th>
      <th scope="col">値</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>HAVE_NOTHING</code></td>
      <td>0</td>
      <td>メディアリソースに関する情報はありません。</td>
    </tr>
    <tr>
      <td><code>HAVE_METADATA</code></td>
      <td>1</td>
      <td>
        メタデータ属性を初期化するのに十分なメディアリソースが取得されました。 シークならば例外を発生させません。
      </td>
    </tr>
    <tr>
      <td><code>HAVE_CURRENT_DATA</code></td>
      <td>2</td>
      <td>
        現在の再生位置にデータがありますが、実際には複数のフレームを再生するのに十分ではありません。
      </td>
    </tr>
    <tr>
      <td><code>HAVE_FUTURE_DATA</code></td>
      <td>3</td>
      <td>
        現在の再生位置と将来までの少なくともほんの少しの時間のデータが利用可能です（つまり、例えば、少なくとも 2 フレームの動画）。
      </td>
    </tr>
    <tr>
      <td><code>HAVE_ENOUGH_DATA</code></td>
      <td>4</td>
      <td>
        十分なデータが利用可能であり、ダウンロードレートが十分に高いため、メディアを中断することなく最後まで再生できます。
      </td>
    </tr>
  </tbody>
</table>

## 例

この例では、音声データを読み込むために `example` 要素で待ち受けします。そして、少なくとも現在の再生位置が読み込まれているかどうかをチェックします。読み込まれていれば、音声を再生します。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById('example');

obj.addEventListener('loadeddata', () => {

  if (obj.readyState >= 2) {
    obj.play();
  }

});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
