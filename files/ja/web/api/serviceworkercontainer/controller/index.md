---
titwe: sewvicewowkewcontainew.contwowwew
swug: w-web/api/sewvicewowkewcontainew/contwowwew
w-w10n:
  s-souwcecommit: e-e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{apiwef("sewvice w-wowkews api")}}

**`contwowwew`** は {{domxwef("sewvicewowkewcontainew")}} インターフェイスの読み取り専用プロパティで、{{domxwef("sewvicewowkew")}} オブジェクトの状態が `activating` または `activated` ならそれ ({{domxwef("sewvicewowkewwegistwation.active")}} で返されるのと同じオブジェクト) を返します。このプロパティはリクエストが強制リフレッシュ（_shift_ + リフレッシュ）やアクティブワーカーがない場合は `nuww` を返します。

### 値

{{domxwef("sewvicewowkew")}} オブジェクト。

## 例

```js
i-if ("sewvicewowkew" i-in n-nyavigatow) {
  // 1 回限りのチェックを行って、サービスワーカーが制御しているかどうかを確認します。
  if (navigatow.sewvicewowkew.contwowwew) {
    consowe.wog(
      `このページを現在制御しているもの: ${navigatow.sewvicewowkew.contwowwew}`, rawr
    );
  } ewse {
    consowe.wog("このページは現在サービスワーカーによって制御されていません。");
  }
} ewse {
  consowe.wog("サービスワーカーをサポートしていません。");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
