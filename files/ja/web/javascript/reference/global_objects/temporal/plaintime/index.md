---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

**`Temporal.PlainTime`** オブジェクトは、日付やタイムゾーンを含まない時刻を表します。例えば、毎日同じ時刻に現れる定期的なイベントなどが該当します。これは基本的に、時、分、秒、ミリ秒、マイクロ秒、ナノ秒の値の組み合わせとして表現されます。

## 解説

`PlainTime` は、本質的に {{jsxref("Temporal.PlainDateTime")}} オブジェクトの時刻部分から日付情報を除去したものです。日付と時刻の情報にはあまり相互作用がないため、時刻プロパティに関する一般的な情報はすべてここに記載されています。

### RFC 9557 形式

`PlainTime` オブジェクトは、[RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 形式（[ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 形式を拡張したもの）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります。

```plain
HH:mm:ss.sssssssss
```

- `HH`
  - : `00` ～ `23` の 2 桁の数値です。時刻の指定子 `T` または `t` が前に付くことがあります。
- `mm` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。デフォルト値は `00` です。
- `ss.sssssssss` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。必要に応じて、その後に `.` または `,` と、1 桁から 9 桁の数字が続く場合があります。デフォルトは `00` です。`HH`、`mm`、`ss` の各要素は、`:` で区切るか、区切らないかを選択できます。`ss` のみ、あるいは `ss` と `mm` の両方を省略できるため、時刻は `HH`、`HH:mm`、または `HH:mm:ss.sssssssss` の 3 つの形式のいずれかになります。

入力として、オプションで日付、オフセット、タイムゾーン識別子、暦を [`PlainDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_形式) と同じ書式で含めることができますが、これらは無視されます。日付のみの文字列は拒否されます。それ以外の `[key=value]` 形式の注釈も同時に無視されます。また、これらの注釈には重要フラグを指定してはいけません。

シリアライズを行う際、小数点以下の桁数を設定できます。

## コンストラクター

- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.PlainTime` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
  - : 1 つ目の時刻が 2 つ目の時刻よりも前か、同じか、後かを示す数値（-1、0、1 のいずれか）を返します。これは、時、分、秒、ミリ秒、マイクロ秒、ナノ秒の各フィールドを 1 つずつ比較することと同等です。
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
  - : 新しい `Temporal.PlainTime` オブジェクトを、別の `Temporal.PlainTime` オブジェクト、時刻のプロパティを持つオブジェクト、[RFC 9557](#rfc_9557_形式) 形式の文字列からのいずれかから作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.PlainTime.prototype` に定義されており、すべての `Temporal.PlainTime` インスタンスで共有されています。

- {{jsxref("Object/constructor", "Temporal.PlainTime.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.PlainTime` のインスタンスの場合、初期値は {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}} コンストラクターとなります。
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
  - : この時刻の時間成分を表す 0 から 23 までの整数を返します。
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
  - : この時刻のマイクロ秒（10<sup>-6</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
  - : この時刻のミリ秒（10<sup>-3</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}
  - : この時刻の分の成分を表す 0 から 59 までの整数を返します。
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
  - : この時刻のナノ秒（10<sup>-9</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
  - : この時刻の秒の成分を表す 0 から 59 までの整数を返します。
- `Temporal.PlainTime.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.PlainTime"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
  - : 新しい `Temporal.PlainDateTime` オブジェクトを作成し、この日時を、指定された時間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ未来へ移動させ、必要に応じて時刻を回り込んだ値を設定して返します。
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
  - : この時刻が別の時刻（{{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} で変換可能な形式のもの）と値が等しい場合は `true` を返し、そうでない場合は `false` を返します。これらは時刻の値によって比較されます。`Temporal.PlainTime.compare(this, other) === 0` と同等です。
- {{jsxref("Temporal/PlainTime/round", "Temporal.PlainTime.prototype.round()")}}
  - : 新しい `Temporal.PlainTime` オブジェクトを作成し、指定された単位に丸められたこの時刻を表す値を設定して返します。
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、別の時刻（{{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} で変換可能な形式のもの）からこの時刻までの経過時間を設定して返します。別の時刻がこの時刻より前の場合は経過時間は正の値となり、後の場合は負の値となります。
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
  - : 新しい `Temporal.PlainTime` オブジェクトを作成し、この時刻から、指定された期間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ過去へ移動させ、必要に応じて時刻を回り込んだ値を設定して返します。
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
  - : この時刻を表す文字列を、{{jsxref("Temporal/PlainTime/toString", "toString()")}} を呼び出した場合と同じ [RFC 9557 形式](#rfc_9557_形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
  - : この時刻を、言語に応じた形式で表した文字列で返します。
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
  - : 指定されたタイムゾーンを使用して、この時刻を表す [RFC 9557 形式](#rfc_9557_形式)の文字列を返します。
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、この時刻からある時刻（{{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} によって変換可能な形式のもの）までの期間を表す値を設定して返します。この期間は、ある時刻がこの時刻の後にある場合には正の値となり、前にある場合は負の値となります。

- {{jsxref("Temporal/PlainTime/valueOf", "Temporal.PlainTime.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.PlainTime` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)ことが防止されます。
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
  - : 新しい `Temporal.PlaiTime` オブジェクトを作成し、この時刻の一部のフィールドを新しい値に置き換えたものを表したものを設定して返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDateTime")}}
