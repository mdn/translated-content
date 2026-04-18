---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
l10n:
  sourceCommit: 3cc665141a834304942e7e2c15745cb766a6b195
---

**`Temporal.ZonedDateTime`** オブジェクトは、タイムゾーンを含む日付と時刻を表します。基本的には、[時点](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant)、タイムゾーン、暦体系の組み合わせとして表現されます。

## 解説

`ZonedDateTime` は、正確な時刻と壁時計時間との橋渡しとして機能します。つまり、歴史上の瞬間（{{jsxref("Temporal.Instant")}} のようなもの）と、ローカルな壁時計時間（{{jsxref("Temporal.PlainDateTime")}} のようなもの）を同時に表します。これは、その時点、タイムゾーン、および暦体系を保持することで実現されます。タイムゾーンは、その時点とローカル時間とを変換するために使用され、暦体系はローカル時間を解釈するために使用されます。

`ZonedDateTime` は、タイムゾーンを意識する唯一の `Temporal` クラスです。タイムゾーンが追加されることで、`ZonedDateTime` オブジェクトは {{jsxref("Temporal.PlainDateTime")}} オブジェクトとは重要な動作の違いが生じます。具体的には、「1 分後の時刻」が毎日同じであるとか、1 日が 24 時間であるといったことを、もはや想定できません。最悪の場合、現地の暦から丸 1 日が欠落してしまうことがあります。下記では、タイムゾーンとオフセットの概要、およびそれらが UTC 時間と現地時間の相互変換にどのように影響するかについて簡潔に説明します。

### タイムゾーンとオフセット

JavaScript で時刻を持つ場合、1 つの標準があります。それは UTC 時刻であり、物理的な時間の経過とともに連続的かつ均一に増加していきます。一方、ユーザーが関心を持つのは、カレンダーや時計で確認できる現地時刻の方です。UTC 時刻と現地時刻の変換には、タイムゾーンのオフセットが用いられ、次のように計算されます。

```plain
local time = UTC time + offset
```

例えば、UTC 時刻が 1970-01-01T00:00:00 で、オフセットが "-05:00" の場合、現地時刻は次のようになります。

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

この現地時刻にオフセットをつけて、つまり "1969-12-31T19:00:00-05:00" という形式で表すことで、この時刻は歴史上の特定の時点として明確に理解することが可能になります。

オフセットを知るには、タイムゾーンと時刻という 2 つの情報が必要です。タイムゾーンとは、地球上の特定の領域で、常に同じオフセットが用いられる領域のことです。同じタイムゾーンにある 2 つの時計は、常に同時に同じ時刻を示しますが、オフセットは必ずしも一定ではありません。つまり、これらの時計の時刻は突然変わることがあります。これは、夏時間の切り替え時に頻繁に現れます。この際、オフセットは1時間変化し、これは年に2回発生します。また、政治的な変化、例えば国がタイムゾーンを変更する場合などにより、オフセットが恒久的に変わることもあります。

タイムゾーンは、[IANA タイムゾーンデータベース](https://www.iana.org/time-zones)に格納されています。それぞれの IANA タイムゾーンには、以下の情報が含まれています：

- タイムゾーンを固有に識別する、主要タイムゾーン識別子。通常は都市を基準とする地理的領域を指しますが（例：`Europe/Paris` や `Africa/Kampala`）、`UTC`（一貫して `+00:00` のオフセット）や `Etc/GMT+5`（歴史的な理由により負のオフセット `-05:00` となる）のような、単一のオフセットを持つタイムゾーンを表すこともあります。歴史的な理由により、UTC タイムゾーンの主要な名称は `UTC` ですが、IANA では `Etc/UTC` となっています。
- 表形式の「タイムゾーン定義」は、UTC の日付と時刻の範囲（将来の範囲を含む）を特定のオフセットに変換します。
- 主要タイムゾーン識別子の別名である、0 個以上の非主要タイムゾーン識別子_です。これらは通常、現在は使用されていないが、互換性の理由から維持されている旧称です。詳細については、下記をご覧ください。

入力として、名前付き識別子は大文字と小文字を区別せずに照合されます。内部的には、それらは推奨される表記で格納され、非主要識別子は主要識別子に変換されることはありません。

> [!NOTE]
> タイムゾーン名を設定する際、`"UTC"` に設定することはほとんどありません。`ZonedDateTime` はユーザーに表示させることを意図していますが、"UTC" というタイムゾーンに住んでいる人はいません。生成時にタイムゾーンが不明で、実時間がわかっている場合は、{{jsxref("Temporal.PlainDateTime")}} を使用してください。正確な時点がわかっている場合は、{{jsxref("Temporal.Instant")}} を使用してください。

`Temporal` API がタイムゾーン識別子を受け入れる場合、主要タイムゾーン識別子や非主要タイムゾーン識別子に加え、オフセットタイムゾーン識別子も受け入れます。これはオフセットと同じ形式ですが、分未満の精度は許可されません。例えば、`+05:30`、`-08`、`+0600` はすべて有効なオフセット識別子です。内部的には、オフセット識別子は `±HH:mm` の形式で格納されます。

> [!NOTE]
> 代わりに名前付きタイムゾーンを使用することができる場合は、オフセット識別子の使用を避けることができます。たとえその領域が常に単一のオフセットを使用してきたとしても、将来的なオフセットに関する政治的な変更に備えるため、名前付き識別子を使用するほうを推奨します。
>
> ある領域で複数のオフセットが使用されている（または使用されていた）場合、その領域の名前付きタイムゾーンを使用することがさらに重要になります。これは、`Temporal.ZonedDateTime` が `add` や `with` といったメソッドを使用することができるためです。それらの派生インスタンスが、異なるオフセットが適用される時点（例えば、夏時間の切り替え後など）に対応している場合、計算結果の現地時刻が不正確になってしまいます。名前付きタイムゾーンを使用することで、その時点における正しいオフセットに基づいて、現地の日付と時刻が常に調整されることを保証します。

便宜上、`Temporal` API にタイムゾーン識別子を指定する際は、`Temporal.ZonedDateTime.prototype.withTimeZone()` や `Temporal.ZonedDateTime.from()` の `timeZoneId` オプションなど、他のいくつかの方法でも提供することができます。

- `timeZoneId` を使用する、別の `ZonedDateTime` インスタンスとして。
- 使用されるタイムゾーン識別子をつけて、タイムゾーン注釈付きの [RFC 9557 形式の文字列](#rfc_9557_形式)として。
- オフセットを含む ISO 8601 / RFC 3339 形式の文字列として。このオフセットはオフセット識別子として使用されます。あるいは、`Z` を使用する場合は、`"UTC"` タイムゾーンが使用されます。以上のように、オフセット識別子では、夏時間の開始や終了時のようなオフセットの変化において、他の `Temporal.ZonedDateTime` インスタンスを安全に導出することができないため、この使用法は一般的に推奨されません。代わりに `Temporal.Instant` を使用するか、ユーザーの実際の名前付きタイムゾーンを取得することを考えてみてください。

IANA のタイムゾーンデータベースは、政治的な変化に応じて新しいタイムゾーンが追加されるなど、時折変更されます。しかし、ごくまれに、都市名の英語訳が更新されたことに合わせるため、あるいは時代遅れの命名規則を改めるために、IANA のタイムゾーン識別子が改名されることがあります。例えば、以下にいくつかの注目すべき名称変更の例を挙げます。

| 現在の IANA 主要識別子           | 古い、主要でなくなった識別子 |
| -------------------------------- | ---------------------------- |
| `America/Argentina/Buenos_Aires` | `America/Buenos_Aires`       |
| `Asia/Kolkata`                   | `Asia/Calcutta`              |
| `Asia/Ho_Chi_Minh`               | `Asia/Saigon`                |
| `Europe/Kyiv`                    | `Europe/Kiev`                |

過去には、これらの名称変更がプログラマーに問題を発生させていました。Unicode [CLDR データベース](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml)（ブラウザーがタイムゾーン識別子やデータを提供するために使用するライブラリー）は、[安定性の理由](https://unicode.org/reports/tr35/#Time_Zone_Identifiers)から、IANA による名称変更に追従していませんでした。その結果、Chrome や Safari などの一部のブラウザーは CLDR の古い識別子を報告した一方で、Firefox などの他のブラウザーは CLDR のデフォルト設定を上書きし、最新の主要識別子を報告しました。

Temporal の導入により、この動作はこれでより標準化されました。

- [CLDR データ](https://github.com/unicode-org/cldr/blob/main/common/bcp47/timezone.xml)には、古い安定した識別子が名前変更された場合に、最新の識別子を示す `"_iana"` 属性が記載されました。ブラウザーはこの新しい属性を使用し、呼び出し側に最新の識別子を指定することができます。
- プログラマーが指定したタイムゾーン識別子は、決して別名に置き換えられることはありません。例えば、呼び出し側が `Asia/Calcutta` または `Asia/Kolkata` を {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} の識別子として指定した場合、結果のインスタンスの {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} には、同じ識別子が返されます。なお、出力の文字の大文字小文字は IANA と一致するように正規化されるため、入力として `ASIA/calCuTTa` を指定した場合、出力として {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} が `Asia/Calcutta` であるものが生成されます。
- 呼び出し側からタイムゾーン識別子が指定されず、代わりにシステム自体から取得された場合（例えば、{{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} を使用する場合など）、すべてのブラウザーで現行の識別子が返されます。都市名の変更については、システムが提供する識別子 API が新しい名称を公開するまでに 2 年のタイムラグがあり、これにより他の要素（Node サーバーなど）が、新しい名称を認識できるよう IANA データベースのコピーを更新する時間を確保できます。

なお、主要識別子への関連付けにおいては国コードが保持されます。例えば、IANA データベースでは `Atlantic/Reykjavik` が `Africa/Abidjan` の別名として記録されていますが、これらは異なる国（それぞれアイスランドとコートジボワール）に対応しているため、別個の主要識別子として扱われます。

この標準化は `Temporal` の外部でも適用されます。例えば、{{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}} によって返される `timeZone` オプションも、同時に別名に置き換えられることはありません。ただし、Temporal による標準化以前は、伝統的にブラウザーがこれらの識別子を正規化していました。一方、{{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones()")}} や {{jsxref("Intl.supportedValuesOf()")}}（`timeZone` オプション）は、最新の識別子を返しますが、一部のブラウザーでは、以前は古い、主要でない識別子を返していました。

### RFC 9557 形式

`ZonedDateTime` オブジェクトは、[RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) 形式（[ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) 形式を拡張したもの）を使用してシリアライズおよび構文解析することができます。文字列は次の形式をとります（空白は可読性のためのものであり、実際の文字列には含めないでください）。

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : 4 桁の数値、または `+` または `-` の符号をつけた 6 桁の数値です。
- `MM`
  - : `01` ～ `12` の 2 桁の数値です。
- `DD`
  - : `01` ～ `31` の 2 桁の数値で、`YYYY`、`MM`、`DD` の各成分は `-` で区切ることも、区切らないこともできます。
- `T` {{optional_inline}}
  - : 日付と時刻を区切るもので、 `T`、`t`、空白のいずれかにすることができます。`HH` が存在するときのみ存在します。
- `HH` {{optional_inline}}
  - : `00` ～ `23` の 2 桁の数値です。デフォルト値は `00` です。
- `mm` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。デフォルト値は `00` です。
- `ss.sssssssss` {{optional_inline}}
  - : `00` ～ `59` の 2 桁の数値です。必要に応じて、その後に `.` または `,` と、1 桁から 9 桁の数字が続く場合があります。デフォルトは `00` です。`HH`、`mm`、`ss` の各要素は、`:` で区切るか、区切らないかを選択できます。`ss` のみ、あるいは `ss` と `mm` の両方を省略できるため、時刻は `HH`、`HH:mm`、または `HH:mm:ss.sssssssss` の 3 つの形式のいずれかになります。
- `Z/±HH:mm` {{optional_inline}}
  - : UTC 指定子 `Z` または `z`、あるいは `+` または `-` の形式で UTC からのオフセットを指定し、その後に時刻要素と同じ書式化された値が続きます。分未満の精度 (`:ss.sssssssss`) は他のシステムでは対応していない場合があるため、受け入れられますが、出力されることはありません。省略された場合、オフセットはタイムゾーン識別子から導出されます。存在する場合は、時刻も併せて指定する必要があります。`Z` は `+00:00` とは異なります。前者はタイムゾーン識別子に関係なく時間が UTC 形式で指定されているということですが、後者は時間がたまたま UTC+0 である現地時間で指定されており、[`offset` オプション](#オフセットの曖昧さ)を通じてタイムゾーン識別子に対して検証されることを意味します。
- `[time_zone_id]`
  - : `time_zone_id` を、以上のようにタイムゾーン識別子（名前付きまたはオフセット）に置き換えてください。識別子の先頭に `!` を付けることで、重要フラグを指定できます。例えば `[!America/New_York]` のようにします。このフラグは、一般的に、対応していないシステムに対して、これを無視してはならないことを指示します。`Temporal.ZonedDateTime.from()` ではこれが要求される点にご注意ください。これを除外すると `RangeError` が発生します。タイムゾーン識別子の注釈がない ISO 8601 / RFC 3339 形式の文字列を構文解析したい場合は、代わりに {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} を使用してください。
- `[u-ca=calendar_id]` {{optional_inline}}
  - : `calendar_id` を、使用する暦に置き換えます。一般的に対応している暦の種類のリストについては、[`Intl.supportedValuesOf()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#対応している暦) を参照してください。デフォルトは `[u-ca=iso8601]` です。キーの先頭に `!` をつけて、`[!u-ca=iso8601]` のように重要フラグを持たせることができます。このフラグは、一般的に、他のシステムに対して、対応していない場合でも無視してはならないことを指示します。`Temporal` パーサーでは、注釈に 2 つ以上のカレンダー注釈が含まれており、そのうちの 1 つが重要フラグ付きの場合、エラーが発生します。なお、`YYYY-MM-DD` は常に ISO 8601 暦の日付として解釈され、その後、指定された暦に変換される点にご注意ください。

入力として、それ以外の `[key=value]` 形式の注釈は無視されます。また、これらの注釈には重要フラグを指定してはいけません。

シリアライズする際、小数点以下の秒の桁数、オフセット、タイムゾーン ID、カレンダー IDを表示させるかどうか、および注釈に重要フラグを追加するかどうかを設定できます。

### 現地時間から協定世界時 (UTC) への変換に伴う曖昧さや不一致

タイムゾーンが指定された場合、UTC から現地時刻への変換は簡単です。まず、タイムゾーン名と時刻からオフセットを取得し、そのオフセットを時刻に追加します。しかし、その逆は成り立ちません。明示的なオフセットがない場合、現地時刻から UTC 時刻への変換は曖昧になります。なぜなら、ある 1 つの現地時刻が対応する UTC 時刻が、0 個、1 個、あるいは複数である可能性があるからです。最も一般的な原因として、夏時間の移行が挙げられます。ニューヨークを例に挙げましょう。標準的なオフセットは UTC-5 ですが、夏時間中はすべての時計が1時間進められるため、オフセットは UTC-4 になります。米国では、切り替えは現地時間の午前 2 時に行われますので、次の 2 つの切り替え日について考えてみましょう。

| UTC 時刻             | ニューヨーク時刻          |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

ご覧の通り、3 月には現地時間から 1 時間が消え、11 月には壁時計時刻が同じである 2 つの時刻が指定されます。例えば、`PlainDateTime` が "2024-03-10T02:05:00" であるものが保存されており、これを `America/New_York` タイムゾーンで解釈しようとすると、これに対応する時点は存在しませんが、一方で `PlainDateTime` が "2024-11-03T01:05:00" であるものは、2 つの異なる時点に相当する可能性があります。

現地時刻から `ZonedDateTime` を構築する場合（{{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}、{{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}、{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}} を使用して）、曖昧性や時間差に対する挙動は `disambiguation` オプションで構成可能です。

- `earlier`
  - : 候補となる時点が 2 つある場合は、より早い方を選択します。抜けがある場合は、その抜けの期間分だけ戻ります。
- `later`
  - : 候補となる時点が 2 つある場合は、より遅い方を選択します。抜けがある場合は、その抜けの期間分だけ先へ進みます。
- `compatible`（デフォルト）
  - : {{jsxref("Date")}} と同じ動作です。時間差がある場合は `later` を、曖昧な場合は `earlier` を使用します。
- `reject`
  - : 曖昧さや抜けがある場合は、常に `RangeError` が発生するようにしてください。

`ZonedDateTime` を生成する際、曖昧さがない場合がいくつかあります。

- `Z` オフセットによって時間が UTC で指定されている場合。
- オフセットが明示的に指定され、使用される場合（下記参照）。

### オフセットの曖昧さ

タイムゾーン内の現地時刻を解釈する際、明示的なオフセットを指定しない場合に曖昧さが生じることがあることを既に示しました。しかし、明示的なオフセットを指定すると、別の競合が生じます。それは、指定されたオフセットと、タイムゾーンおよび現地時間から計算されたオフセットとの間の競合です。これは現実世界では避けられない課題です。将来の時刻を、想定されるオフセットと共に格納した場合、その時刻が来る前に、政治的な理由によりタイムゾーンの定義が変更されていることがあるからです。例えば、2018 年に `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` という時点でリマインダーを設定したとします（これは夏時間です。ブラジルは南半球にあるため、10 月に夏時間が始まり、2 月に終了します）。しかし、その時刻が来る前に、2019 年初頭にブラジルが夏時間の実施を中止すると決定した場合、実際のオフセットは `-03:00` となります。この場合、リマインダーは引き続き正午に発生すべきでしょうか（現地時間を維持する）、それとも午前 11 時に発生すべきでしょうか（正確な時刻を維持する）。

オフセットの曖昧性が生じるのは、タイムスタンプ文字列が、そのタイムスタンプが最初に生成された際に使用されたルールとは異なる IANA タイムゾーンデータベースのルールに基づいて構文解析された場合です。これらは、JavaScript プログラムの単一の実行中にタイムスタンプが生成される場合には決して現れません。なぜなら、ECMAScript 仕様では、JavaScript プログラムの実行期間中、IANA タイムゾーンデータベースのルールは一定でなければならないと要求されているからです。

ただし、以上で述べた `America/Sao_Paulo` の例のように、JavaScript プログラムが以前に格納されたタイムスタンプを構文解析する際、そのタイムスタンプが最初に生成された時点以降に IANA タイムゾーンデータベースが更新されている場合、オフセットの曖昧性が生じる可能性があります。また、異なるバージョンの IANA タイムゾーンデータベースを使用しているコンピューター間（あるいは、まれに、同じコンピューター上の異なるソフトウェア間）でタイムスタンプをやり取りする際にも、同様の現象が発生する可能性があります。また、IANA タイムゾーンデータベースにはビルドオプション（例えば、`backzone` 内の非推奨のルールの使用の有無など）があり、これによって、IANA タイムゾーンデータベースのバージョンが同じであっても、異なるソフトウェアを使用しているコンピューター間でタイムスタンプを通信する際に、オフセットの曖昧さが発生する可能性があります。

オフセットの曖昧性が生じることはめったにありませんが、生じたとしても、常に 1970 年以前のタイムスタンプ、あるいは数か月先や数年先のタイムスタンプにのみ適用されます。しかし、この問題が現れた場合、デフォルトで `RangeError` が発生します。 `ZonedDateTime` を {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} で生成する場合、または {{jsxref("Temporal/ZonedDateTime/with", "with()")}} メソッドを使用して更新する場合、`offset` オプションを使用してオフセットとタイムゾーン識別子のどちらを優先させるかを指定することで、この例外を防ぐことができます。

- `use`
  - : オフセットを使用して正確な時刻を計算します。このオプションでは、たとえその瞬間のオフセットが変更されていたとしても、タイムスタンプ文字列が意図する時点を決定するためにオフセットを「使用」します。その後もタイムゾーン識別子は、（更新されている可能性のある）オフセットを推測するために使用され、そのオフセットを用いて正確な時刻を現地時間に変換します。上記の `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` の例では、このオプションを使用すると、リマインダーは現地時間の午前 11 時に発生することになります。
- `ignore`
  - : タイムゾーン識別子を使用してオフセットを再計算し、文字列で指定されたオフセットを無視します。このオプションでは、時刻を格納するために最初に計算された現地時刻は維持されますが、結果として異なる時刻になることがあります。オフセットを無視することで、[現地時間の解釈における曖昧さ](#現地時間から協定世界時_utc_への変換に伴う曖昧さや不一致)が生じることがあります。これは `disambiguation` オプションを使用して解決されます。上記の `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` の例では、このオプションを使用すると、リマインダーは現地時間の午後 12 時に発生することになります。
- `reject`
  - : オフセットとタイムゾーン識別子の間に競合がある場合は、常に `RangeError` が発生します。これは {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} のデフォルト設定です。
- `prefer`
  - : オフセットが有効な場合はそれを使用し、そうでない場合はタイムゾーン識別子からオフセットを計算します。これは {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} のデフォルト設定です（詳細については、そのメソッドを参照してください）。これは `ignore` とは異なります。なぜなら、現地時間の曖昧性が生じた場合、`disambiguation` オプションではなく、オフセットを使用して解決するからです。

オフセットの曖昧性をどのように処理するかを事前に把握している場合は、デフォルトで発生する例外を避けるために、`offset` オプションの使用を検討することをお勧めします。例えば、カレンダーアプリケーションでは、定期的な会議がそのタイムゾーンの最新の現地時間で表示されるように、タイムゾーン識別子を優先させたい場合が多いため、`offset: "ignore"` が適切です。一方、今からちょうど 3 時間後にタスクを実行するタスクスケジューラアプリケーションの場合は、タイムゾーン規則の変更によって「今から 3 時間後」の意味が変わってはいけないため、`offset: "use"` を選択するのが適切でしょう。

場合によっては、ユーザーからの入力がないと、どの `offset` オプションが正しいのか判断できないことがあります。そのような場合は、`RangeError` を捕捉し、ユーザーにどの現地時間が正しいかを確認した上で、ユーザーの選択に応じた別の `offset` オプションを使用して構文解析を再試行するとよいでしょう。

なお、`Z` オフセットは `+00:00` と同等ではありません。`Z` オフセットは、[RFC 9557](https://www.rfc-editor.org/rfc/rfc9557.html#name-update-to-rfc-3339) に従い、「UTC での時刻はわかっているが、現地時間へのオフセットは不明である」ということです。時刻文字列で `Z` オフセットが使用されている場合、`offset` オプションは無視され、オフセットはタイムゾーン ID から導出されます。一方、`+00:00` オフセットは、たまたま UTC と一致する現地時間のオフセットとして解釈され、タイムゾーン ID に対して検証されます。

> [!NOTE]
> {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} も同時に [RFC 9557](#rfc_9557_形式) 形式の文字列を受け取りますが、タイムゾーン識別子は常に無視され、オフセットのみが読み取られるため、曖昧さは生じません。

## コンストラクター

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} {{experimental_inline}}
  - : 基盤となるデータを直接指定して、新しい `Temporal.ZonedDateTime` オブジェクトを作成します。

## 静的メソッド

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : 1 つ目の日時が 2 つ目の日時よりも前か、同じか、後かを示す数値（-1、0、1 のいずれか）を返します。これは、2 つの日時について {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} を比較することと同等です。
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを、別の `Temporal.ZonedDateTime` オブジェクト、日付、時刻、タイムゾーンのプロパティを持つオブジェクト、[RFC 9557](#rfc_9557_形式) 形式の文字列からのいずれかから作成します。

## インスタンスプロパティ

これらのプロパティは `Temporal.ZonedDateTime.prototype` に定義されており、すべての `Temporal.ZonedDateTime` インスタンスで共有されています。

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : 内部の ISO 8601 日付を解釈するために使用する[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)を表す文字列を返します。
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : このインスタンスオブジェクトを作成したコンストラクター関数です。`Temporal.ZonedDateTime` のインスタンスの場合、初期値は {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} コンストラクターとなります。
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : この日付の月における、1 を起点とする日のインデックスを表す正の整数を返します。これは、カレンダーで表示される日の数値と同じものです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。通常は 1 から始まり連続していますが、常にそうとは限りません。
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : この日付を含む週における、1 を起点とする曜日のインデックスを表す正の整数を返します。曜日の番号は `1` から {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}} まで順に付けられ、それぞれの番号はその曜日の名称に対応しています。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。通常、1 は暦における月曜日を表しますが、その暦を使用するロケールによっては、週の初日を別の曜日と考えてみる場合があります（{{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}} を参照）。
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : この日付の年における、1 を起点とする日のインデックスを表す正の整数を返します。この年の初日は `1` であり、最終日は {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}} です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : この日付の月の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : この日付の週に含まれる日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この数字は常に 7 ですが、他の暦体系では週ごとに異なることがあります。
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : この日付の属する年の日数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この日は 365 日、閏年の場合は 366 日となります。
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）から現在までの経過ミリ秒数を表す数値を返します。これは、`epochNanoseconds` を `1e6` で割り、その結果を切り捨てた値に相当します。
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : {{jsxref("BigInt")}} で表した Unix 元期（1970 年 1 月 1 日午前 0 時、UTC）からこの時点まで経過したナノ秒数を返します。
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : この日付の時代を、使用している暦に固有の小文字の文字列として返します。暦が時代を使用しない場合（ISO 8601 など）は `undefined` を返します。`era` と `eraYear` を組み合わせることで、`year` と同様に、暦内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 グレゴリオ暦では、`"ce"` または `"bce"` のどちらかです。
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : この日付が属する時代における年を非負の整数で表します。暦が時代を使用していない場合（ISO 8601 など）は `undefined` を返します。年のインデックスは通常、1（より一般的）または 0 から始まり、紀元内の年は時間の経過とともに減少させることも可能です（例：グレゴリオ暦の BCE）。`era` と `eraYear` を組み合わせることで、`year` と同様に、カレンダー内の年を一意に特定することができます。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : この時刻の時間成分を表す 0 から 23 までの整数を返します。
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : このタイムゾーンにおけるこの日の 1 日の時間数を表す正の整数を返します。夏時間などのオフセットの変更がある場合、24 時間より多くなったり少なくなったりすることがあります。
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : この日付が閏年であるかどうかを示す論理値を返します。閏年とは、閏日や閏月があるため、平年よりも日数が多くなる年のことです。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : この時刻のマイクロ秒（10<sup>-6</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : この時刻のミリ秒（10<sup>-3</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : この時刻の分の成分を表す 0 から 59 までの整数を返します。
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : この日付の年における、1 を起点とする月のインデックスを表す正の整数を返します。この年の最初の月は `1` であり、最後の月は {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}} です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 なお、{{jsxref("Date.prototype.getMonth()")}} とは異なり、インデックスは 1 から始まります。カレンダーに閏月が含まれる場合、同じ {{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}} を持つ月でも、年によって `month` インデックスが異なることがあります。
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : この日付の月を表す、暦に依存した文字列を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常は `M` に 2 桁の月番号が加わります。閏月の場合、前回月のコードに `L` が続きます。閏月が年の最初の月である場合、コードは `M00L` となります。
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : この日付が属する年の月数を表す正の整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 ISO 8601 暦では、この数字は常に 12 ですが、その他の暦体系では異なる場合があります。
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : この時刻のナノ秒（10<sup>-9</sup> 秒）成分を表す 0 から 999 までの整数を返します。
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : 内部時刻を解釈するために使用される [オフセット](#タイムゾーンとオフセット) を表す文字列を、`±HH:mm` の形式（または、必要に応じて分未満の精度まで指定した `±HH:mm:ss.sssssssss` の形式）で返します。
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : 内部時刻を解釈するために使用されている[オフセット](#タイムゾーンとオフセット)を、ナノ秒単位（正または負）で表す数値を返します。
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : この時刻の秒の成分を表す 0 から 59 までの整数を返します。
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : 内部の時刻を解釈するために使用される[タイムゾーン識別子](#タイムゾーンとオフセット)を表す文字列を返します。これは、`Temporal.ZonedDateTime` オブジェクトの構築時に使用されるのと同じ文字列であり、IANA タイムゾーン名または固定オフセットのいずれかとなります。
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : この日付における {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} での、1 を起点とする週のインデックスを表す正の整数を返します。カレンダーが明確に定義された週の制度を持たない場合は `undefined` を返します。年の最初の週は `1` です。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 なお、ISO 8601 では、年の最初と最後の数日間は、前回年の最後の週、あるいは翌年の最初の週に関連付けられることがあります。
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : この日付が、その暦固有の元期年から経過した年数を表す整数を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常、1 年目は、最新の時代の最初の年、あるいは ISO 8601 の年号 `0001` のどちらかになります。元期が年の途中にある場合、その年は時代の開始日以前と後で同じ値を持ちます。
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : この日付の {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} に対応する年を表す整数を返します。その暦に明確に定義された週の制度がない場合は、`undefined` を返します。[暦](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal#暦)に依存します。 通常、これは年の週番号ですが、ISO 8601 では、年の最初と最後の数日間は、前回年の最後の週または翌年の最初の週に関連付けられる場合があり、その結果、`yearOfWeek` が 1 だけずれることがあります。
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"Temporal.ZonedDateTime"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを作成し、この日付を、指定された時間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ未来へ移動させた値を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : この日時が別の日時（{{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} で変換可能な形式のもの）と値が等しい場合は `true` を返し、そうでない場合は `false` を返します。これらは時点値、タイムゾーン、暦のすべてに基づいて比較されるため、異なる暦やタイムゾーンに基づく 2 つの日時が、{{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} では等しいとみなされる場合でも、`equals()` では等しいとはみなされないことがあります。
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : この時点の前後で、タイムゾーンの UTC オフセットが変更される最初の時点を表す `Temporal.ZonedDateTime` オブジェクトを返します。そのような移行がなければ `null` を返します。これは、夏時間の適用パターンなど、タイムゾーンのオフセット規則を確認するのに使用します。
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを作成し、指定された単位に丸められたこの日時を表す値を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、別の日時（{{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} で変換可能な形式のもの）からこの日時までの経過時間を設定して返します。別の日時がこの日時より前の場合は経過時間は正の値となり、後の場合は負の値となります。
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : この日付のタイムゾーンにおける最初の時点を表す `Temporal.ZonedDateTime` オブジェクトを返します。通常、時刻は `00:00:00` になりますが、オフセットの変更により正子が存在しない場合は異なる場合があります。その場合は、存在する最も早い時刻が返されます。
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを作成し、この日時から、指定された期間（{{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} で変換可能な形式のもの）だけ過去へ移動させた値を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : 新しい {{jsxref("Temporal.Instant")}} オブジェクトを作成し、この日時の時点を表す値を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : この日時を表す文字列を、{{jsxref("Temporal/ZonedDateTime/toString", "toString()")}} を呼び出した場合と同じ [RFC 9557 形式](#rfc_9557_形式)で返します。{{jsxref("JSON.stringify()")}} によって暗黙的に呼び出されることを意図しています。
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : この日時を、言語に応じた形式で表した文字列で返します。
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : 新しい {{jsxref("Temporal.PlainDate")}} オブジェクトを作成し、この日時情報の日付部分を表す値を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : 新しい {{jsxref("Temporal.PlainDateTime")}} オブジェクトを作成し、この日時オブジェクトの日時部分を設定して返します。タイムゾーン情報のみが除去されます。
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : 新しい {{jsxref("Temporal.PlainTime")}} オブジェクトを作成し、この日時の時刻部分を表す値を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : 指定されたタイムゾーンを使用して、この日時を表す [RFC 9557 形式](#rfc_9557_形式)の文字列を返します。
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : 新しい {{jsxref("Temporal.Duration")}} オブジェクトを作成し、この日時からある日時（{{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} によって変換可能な形式のもの）までの期間を表す値を設定して返します。この期間は、ある日時がこの日時の後にある場合には正の値となり、前にある場合は負の値となります。
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : {{jsxref("TypeError")}} が発生します。これにより、算術演算や比較演算で使用される際、`Temporal.ZonedDateTime` のインスタンスが[プリミティブ型へ暗黙的に変換される](/ja/docs/Web/JavaScript/Guide/Data_structures#プリミティブ変換)ことが防止されます。
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを作成し、この日時の一部のフィールドを新しい値に置き換えたものを表したものを設定して返します。
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを作成し、新しい暦体系で表したこの日時を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを作成し、この日時のうち時刻部分が完全に新しい時刻（{{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} で変換可能な形式のもの）に完全に置き換えたものを表す値を設定して返します。
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : 新しい `Temporal.ZonedDateTime` オブジェクトを作成し、この日時と同じ時点を、新しいタイムゾーンで表す値を設定して返します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainTime")}}
