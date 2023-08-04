---
title: Vibration API
slug: Web/API/Vibration_API
---

{{DefaultAPISidebar("Vibration API")}}

現代のモバイル端末は、たいていバイブレーションハードウェアを内蔵しており、ソフトウェアのコードが端末を振動させることによりユーザーに物理的なフィードバックを与えることができます。 **Vibration API** はウェブアプリに、このハードウェアが存在すればアクセスすることができるようにし、端末が対応していない場合は何もしません。

## バイブレーションの表現

バイブレーションはオン・オフのパルスのパターンで表され、様々な長さになることがあります。パターンは振動するミリ秒数を示す整数 1 つ、あるいはバイブレーションと休止時間のパターンを示す整数の配列で構成します。バイブレーションは {{domxref("Navigator.vibrate()")}} という単一のメソッドで制御します。

### 1 回のバイブレーション

1 個の値、または 1 個だけの値で構成される配列を指定することにより、バイブレーションハードウェアを 1 回振動させることができます:

```js
window.navigator.vibrate(200);
window.navigator.vibrate([200]);
```

どちらの例も、デバイスを 200 ミリ秒間振動させます。

### バイブレーションパターン

値の配列は、デバイスが振動する時間と振動しない時間を交互に示します。配列内の各値は整数値に変換されて、デバイスを振動させるミリ秒数および振動させないミリ秒数として交互に解釈されます。例えば以下のようにします。

```js
window.navigator.vibrate([200, 100, 200]);
```

これはデバイスを 200 ミリ秒間振動させて、その後再び 200 ミリ秒間振動させる前に 100 ミリ秒間振動を止めます。

バイブレーション/休止のペアは好きなだけ多く指定でき、またエントリ数は偶数・奇数のどちらでも可能です。各バイブレーション時間の終端で自動的にバイブレーションを止めますので、休止時間を最後のエントリとして与えなくてもよいことは注目に値します。

### 実行中のバイブレーションを取り消す

値 `0`、空の配列、あるいはすべての値が `0` の配列 を指定して {{domxref("Navigator.vibrate()")}} を呼び出すと、現在進行中のバイブレーションパターンを取り消します。

### 継続的なバイブレーション

基本的な `setInterval` および `clearInterval` のアクションにより、継続的なバイブレーションを生成できます:

```js
var vibrateInterval;

// 渡されたレベルでバイブレーションを開始
function startVibrate(duration) {
    navigator.vibrate(duration);
}

// バイブレーションを停止
function stopVibrate() {
    // インターバルをクリアして継続的なバイブレーションを停止
    if(vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
}

// 与えられた時間とインターバルによる継続的なバイブレーションを開始
// 数値が与えられるものとする
function startPersistentVibrate(duration, interval) {
    vibrateInterval = setInterval(function() {
        startVibrate(duration);
    }, interval);
}
```

当然ながら、上記のコードスニペットは配列によるバイブレーションを考慮していません。配列に基づく継続的なバイブレーションでは、配列のアイテムの総数を計算して、その値を基にしてインターバル (おそらく、遅延時間を付加して) を作成することが必要でしょう。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.Navigator.vibrate")}}

## 関連情報

- {{DOMxRef("Navigator.vibrate()")}}
