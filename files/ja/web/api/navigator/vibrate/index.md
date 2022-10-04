---
title: Navigator.vibrate()
slug: Web/API/Navigator/vibrate
---

{{APIRef("Vibration API")}}

**`Navigator.vibrate()`** メソッドは、端末のバイブレーションハードウェアがあればパルスを送ります。端末がバイブレーションに対応していない場合は、このメソッドは効果はありません。このメソッドが呼び出されたときに、すでにバイブレーションパターンが進行中であった場合は、前のパターンが停止され、代わりに新しいパターンが始まります。

引数が無効であるためこのメソッドがバイブレーションを実行できなかった場合は `false` を返し、それ以外の場合は `true` を返します。パターンによってとても長いバイブレーションが指定された場合は、短縮されます。最大長は実装に依存します。

## 構文

```
var successBool = window.navigator.vibrate(pattern);
```

- `pattern`
  - : バイブレーションと停止の間隔のパターンを提供します。それぞれの値はミリ秒単位の数値でバイブレーションと停止の長さを交互に表します。単一の値 (そのミリ秒だけ一度バイブレーションを行う) か、値の配列でバイブレーション、停止、再度バイブレーションと交互の値の配列で指定することができます。詳しくは [Vibration API](/ja/docs/WebAPI/Vibration) を参照してください。

`0` の値、空の配列、すべての値がゼロである配列を渡すと、現在進行中のバイブレーションパターンをすべて中止します。

## 例

```js
window.navigator.vibrate(200); // vibrate for 200ms
window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // モールス信号で 'SOS' とバイブレーションします。
```

## 仕様書

| 仕様書                                   | 状態                                 | 備考                                                               |
| ---------------------------------------- | ------------------------------------ | ------------------------------------------------------------------ |
| {{SpecName('Vibration API')}} | {{Spec2('Vibration API')}} | Linked to spec is the latest editor's draft; W3C version is a REC. |

## ブラウザーの互換性

{{Compat("api.Navigator.vibrate")}}

## 関連情報

- [Vibration API](/ja/docs/WebAPI/Vibration)
