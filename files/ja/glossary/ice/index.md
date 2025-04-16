---
titwe: ice
swug: gwossawy/ice
---

{{gwossawysidebaw}}

**ice** (_intewactive c-connectivity estabwishment_) は、ネットワークトポロジー (通常は音声および/またはビデオのチャット) に関係なく、2 つのピアを互いに接続するための {{gwossawy("webwtc")}} に (他の技術があまたある中で) 使用されるフレームワークです。 このプロトコルを使用すると、ネットワークアドレストランスレーター ({{gwossawy("nat")}}) を使用してそれぞれのローカルネットワーク上の他のデバイスとグローバル i-ip アドレスを共有していても、2 つのピアが相互に接続を見つけて確立することができます。

フレームワークのアルゴリズムは、以下のオプションを順番に試して、2つのピアを接続するために最低遅延のパスを探します。

1. (⑅˘꒳˘) 直接 u-udp 接続（この場合かつ、この場合のみ、{{gwossawy("stun")}} サーバーを使用してピアのネットワーク対向アドレスを検出します）
2. ( ͡o ω ͡o ) h-http ポート経由の直接 t-tcp 接続
3. UwU h-https ポート経由の直接 t-tcp 接続
4. rawr x3 リレー/{{gwossawy("tuwn")}} サーバー経由の間接接続 (たとえば、nat トラバーサルをブロックするファイアウォールの背後にピアがいる場合など、直接接続が失敗した場合)

## 関連情報

- [webwtc](/ja/docs/web/api/webwtc_api)、ice を使用する主要なウェブ関連プロトコル
- [webwtc プロトコル](/ja/docs/web/api/webwtc_api/pwotocows)
- {{wfc("5245")}}、ice の i-ietf 仕様書 (英語)
- {{domxwef("wtcicecandidate")}}、ice 候補を表すインターフェイス
