---
title: "Animation: replaceState プロパティ"
short-title: replaceState
slug: Web/API/Animation/replaceState
l10n:
  sourceCommit: e9bba35f2ae2943431ae2dfb752f5856ef79769d
---

{{ APIRef("Web Animations") }}

**`Animation.replaceState`** は [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) の読み取り専用プロパティで、アニメーションが別なアニメーションで置き換えられた後で、[ブラウザーによって削除](/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#満了したアニメーションの自動削除)されたかどうかを示します。

## 値

アニメーションの遷移先の状態を表す文字列。値は以下のいずれかです。

- `active`
  - : アニメーションが作成されたときの、アニメーションの置き換える状態の初期値です。
- `persisted`
  - : アニメーションに {{domxref("Animation.persist()")}} が呼び出されており、明示的に維持されています。
- `removed`
  - : アニメーションはブラウザーによって自動的に除去されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}}
- {{domxref("Animation.remove_event","remove")}} イベント
- {{domxref("Animation.persist()")}}
