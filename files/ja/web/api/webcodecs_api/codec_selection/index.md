---
title: コーデックの選択
slug: Web/API/WebCodecs_API/Codec_selection
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("WebCodecs API")}}

開発者は通常、`vp9` や `h264` といったコード識別子でコーデックを指しますが、データのエンコードおよびデコード方法を具体的に制御する構成プロファイル、レベル、その他のパラメーターは数多く存在します。

[WebCodecs API](/ja/docs/Web/API/WebCodecs_API) では、`vp9` や `h264` のような曖昧な文字列ではなく、`vp09.00.40.08.00` のような完全に指定されたコーデック文字列を使用する必要があります。完全に指定されたコーデック文字列には、コーデックのファミリーだけでなく、プロファイル、レベル、その他のパラメーターも詳細に記述されています。

適切な文字列の選択は使用用途によって異なりますが、主に互換性の問題や、実行するハードウェアおよびソフトウェアによって左右されます。このガイドでは、コーデック文字列の仕組み、[一般的な使用ケース](#一般的な使用ケース)に適したコーデックの選び方、および指定したコーデックが利用できない場合に代替のコーデック文字列へ円滑に切り替えるための一般的な手法について説明します。

## デコードとエンコード

動画や音声ファイルを**デコード**する際、コーデックはファイルが当初どのようにエンコードされたかによって決定され、ユーザーが選択することはできません。[Mediabunny](https://mediabunny.dev/) や [web-demuxer](https://github.com/bilibili/web-demuxer) といった多重分離ライブラリーは、指定されたファイルに対して正しいコーデック文字列を抽出します。この文字列を、設定時に {{domxref("VideoDecoder")}} または {{domxref("AudioDecoder")}} に直接渡すことができます。

**エンコード**を行う際は、コーデックを選択します。このガイドの残りの部分では、コーデックの選び方について説明します。

## 動画コーデック

### 動画コーデックファミリ

`vp09.00.40.08.00` や `avc1.4d0034` といったコーデック文字列を選択する前に、コーデックのファミリーについて確認しておくことをお勧めします。

#### H.264 (AVC)

H.264 は、ブラウザー、オペレーティングシステム、一般向け機器において、最も広く対応されているコーデックの一つです。MP4 ファイルで最も一般的に使用されるコーデックであり、サードパーティ製ソフトウェアでの再生を目的とした動画をエンコードするアプリケーションでは、最大限の互換性を確保するための現実的な選択肢として、通常 H.264 が採用されています。

H.264 は広く普及していますが、特許のあるコーデックである点に留意する必要があります。ブラウザーベンダーは WebCodecs で使用される H.264 エンコーダーの実装に関するライセンスを保有していますが、特定の状況下ではロイヤリティが発生する可能性があります。開発者は、法務担当者と使用条件について確認する必要があります。

#### VP9

VP9 は Google が開発したオープンソースのコーデックであり、同等の画質において H.264 よりも優れた圧縮率を実現します。WebM コンテナー内の VP9 は、最新のブラウザーで広く対応されており、その対応状況は H.264 と同等か、あるいはそれを上回っています。

WebM コンテナー内の VP9 は、Windows のネイティブ動画プレーヤー（Windows Media Player）や VLC などのサードパーティ製プレーヤー対応していますが、現在、macOS および iOS ではネイティブでの再生の対応が提供されていません。

VP9 は、MP4 ファイル内のコーデックとして対応される場合もありますが、必ずしもそうとは限りません。この構成への対応は、再生ソフトウェアによって異なります。

VP9 は、その優れた圧縮率や、オープンソースのライセンスが重要な場合、内部利用のユースケースでよく選択されます。

#### AV1

AV1 は、[Alliance for Open Media](https://aomedia.org/) によって開発された新しいオープンソースコーデックです。AV1 は、同等の画質において H.264 や VP9 よりも優れた圧縮率を実現しており、現在では世界中のブラウザーの 90% 以上がデコードに対応しています。

AV1 エンコーディングの対応状況は、デスクトップブラウザーでは広く普及していますが、Safari や Android では限定的です。AV1 は VP9 よりもビットあたりの画質が優れていますが、エンコードにはより多くの処理能力を必要とします。民生用デバイスでは AV1 のハードウェアアクセラレーションに対応する機種が増えており、これにより AV1 エンコーディングの実用性が高まっています。VP9 ではなく AV1 を採用するかどうかは、通常、特定のユースケースにおいて、ビットあたりの画質の向上が、エンコードにかかる追加のオーバーヘッドに見合うかどうかという点に帰着します。

#### HEVC (H.265)

HEVC は H.264 よりも優れた圧縮率を提供しますが、Apple プラットフォーム以外のブラウザーにおけるエンコードの対応には大きな課題があります。
汎用的なエンコード形式としては推奨されません。

H.264 と同様、HEVC も特許のあるコーデックです。このコーデックは、特定の状況下でロイヤリティの対象となります。開発者は、弁護士と相談の上、使用方法を確認する必要があります。

### コーデックコンテナーの互換性

すべてのコンテナーがすべてのコーデックに対応しているわけではありません。
以下の表は、最も一般的な 2 つのウェブ動画コンテナーについてまとめたものです。

| コーデック | MP4    | WebM |
| ---------- | ------ | ---- |
| H.264      | Yes    | No   |
| VP9        | 部分的 | Yes  |
| AV1        | 部分的 | Yes  |
| HEVC       | Yes    | No   |

H.264 は MP4 の標準コーデックです。VP9 と AV1 は WebM の標準コーデックです。
VP9 と AV1 は一部の環境で MP4 への対応が限定的に行われていますが、WebM と組み合わせる方がより確実です。

### コーデック文字列の選択

各コーデックファミリーには、何百ものコーデック文字列が存在します。

各コーデック文字列は、エンコードされたストリームの機能と互換性を決定する**プロファイル**と**レベル**を指定します。プロファイルは、どのエンコード機能が有効になるかを制御します。Baseline などの低いプロファイルはよりシンプルで幅広い互換性がありますが、High などの高いプロファイルは、より高性能なハードウェアを必要とする代わりに、より優れた圧縮率を実現します。レベルは、ストリームが使用できる最大解像度とビットレートを設定します。一般的に、より高い解像度や圧縮効率が特に必要でない限り、低いプロファイルとレベルを選択することをお勧めします。

以下の表は、エンコードの互換性を最大化するレベルとプロファイルを含む、コーデック文字列の実用的な出発点となります。

#### H.264

| コーデック文字列 | プロファイル | 最大解像度 | 対応                                                               |
| ---------------- | ------------ | ---------- | ------------------------------------------------------------------ |
| `avc1.42001f`    | Baseline     | 720p       | [99.6%](https://webcodecsfundamentals.org/codecs/avc1.42001f.html) |
| `avc1.4d0034`    | Main         | 4K         | [98.9%](https://webcodecsfundamentals.org/codecs/avc1.4d0034.html) |
| `avc1.42003e`    | Baseline     | 8K         | [86.8%](https://webcodecsfundamentals.org/codecs/avc1.42003e.html) |
| `avc1.64003e`    | High         | 8K         | [85.9%](https://webcodecsfundamentals.org/codecs/avc1.64003e.html) |

#### VP9

| コーデック文字列   | プロファイル | 最大解像度 | 対応                                                                     |
| ------------------ | ------------ | ---------- | ------------------------------------------------------------------------ |
| `vp09.00.30.08.00` | 3            | 720p       | [99.98%](https://webcodecsfundamentals.org/codecs/vp09.00.30.08.00.html) |
| `vp09.00.40.08.00` | 4            | 2K         | [99.96%](https://webcodecsfundamentals.org/codecs/vp09.00.40.08.00.html) |
| `vp09.00.50.08.00` | 5            | 4K         | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.50.08.00.html) |
| `vp09.00.61.08.00` | 6.1          | 8K         | [99.97%](https://webcodecsfundamentals.org/codecs/vp09.00.61.08.00.html) |

#### AV1

| コーデック文字列 | プロファイル | 最大解像度 | 対応                                                                 |
| ---------------- | ------------ | ---------- | -------------------------------------------------------------------- |
| `av01.0.05M.08`  | 3.1          | 720p       | [87.9%](https://webcodecsfundamentals.org/codecs/av01.0.05M.08.html) |
| `av01.0.08M.08`  | 4.0          | 1080p      | [87.8%](https://webcodecsfundamentals.org/codecs/av01.0.08M.08.html) |
| `av01.0.12M.08`  | 5.0          | 4K         | [87.8%](https://webcodecsfundamentals.org/codecs/av01.0.12M.08.html) |

#### HEVC

| コーデック文字列   | プロファイル | 最大解像度 | 対応                                                                    |
| ------------------ | ------------ | ---------- | ----------------------------------------------------------------------- |
| `hvc1.1.6.L120.B0` | 4.0          | 1080p      | [73.6%](https://webcodecsfundamentals.org/codecs/hev1.1.6.L120.B0.html) |
| `hvc1.1.6.L150.B0` | 5.0          | 4K         | [73.6%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L150.B0.html) |
| `hvc1.1.6.L180.B0` | 6.0          | 8K         | [73.1%](https://webcodecsfundamentals.org/codecs/hvc1.1.6.L180.B0.html) |

利用可能なコーデック文字列の完全な一覧およびブラウザーや機器ごとの対応状況については、[コーデック対応表](https://webcodecsfundamentals.org/datasets/codec-support-table/)をご確認ください。

### コーデック文字列の書式

完全修飾コーデック文字列には、コーデックファミリー、プロファイル、レベル、ストリームのエンコードやデコードが可能なハードウェア、およびその解像度や品質に影響を与えるその他のパラメーターがエンコードされています。

これらのコーデック文字列の形式は、[W3C コーデックレジストリー](https://w3c.github.io/webcodecs/codec_registry.html)で規定されており、コーデックファミリーごとに形式が異なります。

#### H.264

`avc1.4d0034`

- `avc1` — H.264/AVC コーデック識別子
- `4d` — Profile IDC 16 進数 (`4d` = Main profile)
- `00` — Constraint flags
- `34` — Level IDC 16 進数 (`34` = level 5.2, supports up to 4K)

#### VP9

`vp09.00.40.08.00`

- `vp09` — VP9 コーデック識別子
- `00` — Profile
- `40` — Level (`40` = level 4.0, supports up to 2K)
- `08` — Bit depth (8-bit)
- `00` — Chroma subsampling

#### AV1

`av01.0.05M.08`

- `av01` — AV1 コーデック識別子
- `0` — Profile (Main)
- `05M` — Level and tier (`05` = level 3.1, `M` = Main tier)
- `08` — Bit depth (8-bit)

#### HEVC

`hvc1.1.6.L150.B0`

- `hvc1` — HEVC コーデック識別子 (MP4/QuickTime variant)
- `1` — Profile (`1` = Main profile)
- `6` — Compatibility flags
- `L150` — Level × 30 (`L150` = level 5.0, supports up to 4K)
- `B0` — Tier and constraint flags (`B0` = Main tier)

## 音声コーデック

### Opus

Opus は、さまざまなブラウザーやプラットフォームで幅広いエンコードに対応したオープンソースのコーデックです。WebM ファイルの標準音声コーデックであり、WebCodecs におけるほとんどの音声エンコード用途において推奨される選択肢です。

### AAC

AAC は MP4 ファイルの標準音声コーデックであり、MP4 出力を対象とする場合には必須となります。ただし、WebCodecs における AAC エンコードの対応には顕著な制限があります。具体的には、どのプラットフォームの Firefox でも、またデスクトップ版 Linux のどのブラウザーでも対応していません。

{{domxref("AudioEncoder")}}に対応sるう Safari のバージョン（Safari 26 以降）では AAC エンコードに広く対応していますが、それ以前のバージョンの Safari では、音声エンコード全般に対応していません。

### MP3 および PCM

MP3 および PCM はエンコード形式として広く対応されておらず、MP3 エンコードは現在、主要なブラウザーで対応されていません。 PCM（非圧縮音声）は、生の音声処理用の{{domxref("AudioData")}}形式として利用可能ですが、`AudioEncoder`によるエンコードへの対応は限定的です。

### 音声コーデック文字列リファレンス

オーディオコーデックの文字列は、動画コーデックの文字列よりも単純です。Opus には追加のパラメータは必要ありませんが、AACでは短いパラメータ文字列を使用します。

| コーデック | コーデック文字列 | コンテナー | エンコーダーの対応                                               | デコーダーの対応                                                 |
| ---------- | ---------------- | ---------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| Opus       | `opus`           | WebM       | [96.1%](https://webcodecsfundamentals.org/codecs/opus.html)      | [96.5%](https://webcodecsfundamentals.org/codecs/opus.html)      |
| AAC        | `mp4a.40.2`      | MP4        | [90.1%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) | [96.4%](https://webcodecsfundamentals.org/codecs/mp4a.40.2.html) |
| MP3        | `mp3`            | —          | [0%](https://webcodecsfundamentals.org/codecs/mp3.html)          | [96.5%](https://webcodecsfundamentals.org/codecs/mp3.html)       |
| FLAC       | `flac`           | —          | [0%](https://webcodecsfundamentals.org/codecs/flac.html)         | [96.5%](https://webcodecsfundamentals.org/codecs/flac.html)      |
| Vorbis     | `vorbis`         | WebM       | [3.8%](https://webcodecsfundamentals.org/codecs/vorbis.html)     | [96.5%](https://webcodecsfundamentals.org/codecs/vorbis.html)    |
| PCM        | `pcm-f32`        | —          | [8.7%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)    | [94.6%](https://webcodecsfundamentals.org/codecs/pcm-f32.html)   |

AAC エンコードの対応状況が低い数値となっているのは、前述のプラットフォーム間の差異によるものです。具体的には、Firefox（全プラットフォーム）、デスクトップ版 Linux（全ブラウザー）、および Apple 端末における `AudioEncoder` の限定的な対応が挙げられます。AAC にはいくつかのバリエーションがありますが、エンコードには `mp4a.40.2` (AAC-LC) が標準的な選択肢となります。`mp4a.40.5` および `mp4a.40.29` は、スペクトル帯域複製 (SBR) を使用する HE-AAC 構成に対応しており、これによりデコーダーは設定されたサンプリングレートの 2 倍のレートで音声を出力します。

PCM にはいくつかのバリエーションがあります。`pcm-f32`（32 ビット浮動小数点）、`pcm-s16`（16 ビット符号付き）、`pcm-s24`（24 ビット符号付き）、`pcm-s32`（32 ビット符号付き）`pcm-u8`（8 ビット符号なし）。すべてのバリエーションは、ブラウザーでの対応状況が同等です。`pcm-f32` フォーマットは、{{domxref("AudioData")}} で使用される `f32-planar` レイアウトと一致しており、生の音声処理において最も実用的な選択肢です。
`AudioEncoder` を構成する前に、実行時に対応状況を確認するには、{{domxref("AudioEncoder/isConfigSupported_static", "AudioEncoder.isConfigSupported()")}} を使用してください。なお、`AudioEncoder` 自体はすべてのブラウザーで利用可能ではない点に注意してください。`isConfigSupported()` を呼び出す前に、`typeof AudioEncoder !== 「undefined」` でその存在を確認してください。

## 一般的な使用ケース

動画コーデックと音声コーデック、およびコンテナー形式を、セットとして選択する必要があります。実用的なクイックスタートガイドとして、一般的な設定例をいくつかご紹介します。

- **最大限の互換性を重視する場合**（サードパーティ製ソフトウェアや幅広い機器での再生を想定した動画）：実際には、MP4 コンテナー内の H.264（例：`avc1.4d0034`）＋AAC（`mp4a.40.2`）が最も一般的な選択肢です。
- **エンコードと再生の両方を制御するオープンソースプロジェクトやアプリケーション**（例：社内ツール、アプリ内ストリーミング）：WebM コンテナー内の VP9（例：`vp09.00.40.08.00`）＋Opus（`opus`）が最適です。どちらもオープンソースであり、WebM はこの組み合わせの標準コンテナーです。
- **最大圧縮率**（例：大規模ストリーミング）：対象ユーザーが十分なハードウェア対応を持っている場合、WebM コンテナー内の AV1 + Opus が適しています。この組み合わせを採用する前に、{{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}} を使用して確認してください。

## ランタイムでの対応のチェック

エンコードを行う前に、{{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}} を使用して、指定された設定が現在の機器で対応しているかを確認してください。

```js
const { supported } = await VideoEncoder.isConfigSupported({
  codec: "avc1.4d0034",
  width: 1920,
  height: 1080,
});
```

ハードウェアの対応状況は危機によって異なるため、一般的な手法として、コーデックのリストを品質の高い順から低い順にテストし、対応している最初のものを使用します。

```js
const candidates = ["avc1.64003e", "avc1.4d0034", "avc1.42003e", "avc1.42001f"];
let codecString;

for (const codec of candidates) {
  const { supported } = await VideoEncoder.isConfigSupported({
    codec,
    width: 1920,
    height: 1080,
    bitrate: 5_000_000,
    framerate: 30,
  });
  if (supported) {
    codecString = codec;
    break;
  }
}
```

VP9 についても同様のパターンが当てはまります。

```js
const candidates = [
  "vp09.00.61.08.00",
  "vp09.00.50.08.00",
  "vp09.00.40.08.00",
  "vp09.00.10.08.00",
];
let codecString;

for (const codec of candidates) {
  const { supported } = await VideoEncoder.isConfigSupported({
    codec,
    width: 1920,
    height: 1080,
    bitrate: 5_000_000,
    framerate: 30,
  });
  if (supported) {
    codecString = codec;
    break;
  }
}
```

音声ついても同様のパターンが適用されます。{{domxref("AudioEncoder")}} はすべてのブラウザーで利用可能ではないため、`isConfigSupported()` を呼び出す前に、その存在を確認してください。

```js
if (typeof AudioEncoder !== "undefined") {
  const { supported } = await AudioEncoder.isConfigSupported({
    codec: "opus",
    sampleRate: 48000,
    numberOfChannels: 2,
  });
}
```

## 関連情報

- [WebCodecs Support Dataset](https://zenodo.org/records/19187467)
- [動画処理の概要](/ja/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [WebCodecs API の使用](/ja/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
- [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) - WebCodecs Fundamentals
- {{domxref("VideoEncoder/isConfigSupported_static", "VideoEncoder.isConfigSupported()")}}
- {{domxref("VideoDecoder/isConfigSupported_static", "VideoDecoder.isConfigSupported()")}}
- {{domxref("AudioEncoder/isConfigSupported_static", "AudioEncoder.isConfigSupported()")}}
- {{domxref("AudioDecoder/isConfigSupported_static", "AudioDecoder.isConfigSupported()")}}
