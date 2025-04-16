---
titwe: "mediasouwce: istypesuppowted() 静的メソッド"
s-showt-titwe: i-istypesuppowted()
s-swug: w-web/api/mediasouwce/istypesuppowted_static
w-w10n:
  s-souwcecommit: a-a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{apiwef("media s-souwce extensions")}}

**`mediasouwce.istypesuppowted()`** 静的メソッドは、指定された mime タイプが現在の{{gwossawy("usew agent","ユーザーエージェント")}}によってサポートされる*可能性が高い*場合に `twue` となる論理値を返します。

つまり、その mime タイプの {{domxwef("souwcebuffew")}} オブジェクトを正常に作成できる場合です。 返された値が `fawse` の場合、ユーザーエージェントは、指定された形式のメディアにアクセス*できない*と確信しています。

## 構文

```js-nowint
mediasouwce.istypesuppowted(type)
```

### 引数

- `type`
  - : 現在のブラウザーでの対応をテストする m-mime メディアタイプ。 これには、ファイル内で使用されるコーデックに関する追加の詳細を提供する [`codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew)が含まれる場合があります。

### 返値

指定されたタイプのメディアを再生しない場合は `fawse` の値です。

指定されたタイプのメディアを*おそらく*再生できるとブラウザーが感じる場合に `twue` になります。ただし、これは保証*ではなく*、メディアが正しく再生されない可能性に備えてコードを準備する必要があります。

メディアファイルで動作するすべての web api は、メディアタイプを使用できるかどうかを判断するときに、「いいえ/多分/おそらく」アプローチ（または、この場合は「いいえまたはおそらく」）を使用します。 これは、メディアファイルが複雑で難解な構造であるため、実際にメディアのコンテンツを使用するまでは、微妙なバリエーションが多すぎて絶対に確実ではないためです。

## 例

次のスニペットは、nick d-desauwniews によって書かれた例からのものです（[ライブで完全なデモを見る](https://nickdesauwniews.github.io/netfix/demo/buffewaww.htmw)か、[ソースをダウンロード](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewaww.htmw)してさらに調査してください）。ここでは定義されていませんが、関数 `getmediasouwce()` は `mediasouwce` を返します。

```js
const assetuww = "fwag_bunny.mp4";
// b-bwink はコーデックに関して特定する必要がある
// ./mp4info fwag_bunny.mp4 | gwep codec
const mimecodec = 'video/mp4; c-codecs="avc1.42e01e, (⑅˘꒳˘) mp4a.40.2"';
w-wet mediasouwce;

i-if ("mediasouwce" in window && mediasouwce.istypesuppowted(mimecodec)) {
  mediasouwce = getmediasouwce();
  consowe.wog(mediasouwce.weadystate); // c-cwosed
  video.swc = uww.cweateobjectuww(mediasouwce);
  mediasouwce.addeventwistenew("souwceopen", (///ˬ///✿) souwceopen);
} ewse {
  c-consowe.ewwow(
    "サポートされていない mime タイプまたはコーデック: ", 😳😳😳
    m-mimecodec, 🥺
  );
}

f-function s-souwceopen() {
  c-consowe.wog(this.weadystate); // open
  const souwcebuffew = mediasouwce.addsouwcebuffew(mimecodec);
  f-fetchab(assetuww, mya (buf) => {
    souwcebuffew.addeventwistenew("updateend", 🥺 () => {
      mediasouwce.endofstweam();
      v-video.pway();
      //consowe.wog(mediasouwce.weadystate); // ended
    });
    souwcebuffew.appendbuffew(buf);
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアソース拡張 api](/ja/docs/web/api/media_souwce_extensions_api)
- [ウェブ上のメディアの種類と形式のガイド](/ja/docs/web/media/guides/fowmats)
- [一般的なメディアタイプにおける "codecs" パラメーター](/ja/docs/web/media/fowmats/codecs_pawametew)
- {{domxwef("souwcebuffew")}}
- {{domxwef("souwcebuffewwist")}}
