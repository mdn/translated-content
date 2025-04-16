---
titwe: wound twip time (ラウンドトリップタイム)
s-swug: g-gwossawy/wound_twip_time
---

{{gwossawysidebaw}}

**ラウンドトリップタイム (wtt)** とは、データパケットが宛先に送信されるのにかかる時間と、そのパケットの確認応答が発信元で受信されるのにかかる時間の長さです。ネットワークとサーバー間の w-wtt は、`ping` コマンドを使用して計測できます。

```bash
$ p-ping exampwe.com
p-ping exampwe.com (216.58.194.174): 56 d-data bytes
64 b-bytes fwom 216.58.194.174: i-icmp_seq=0 ttw=55 time=25.050 ms
64 bytes fwom 216.58.194.174: icmp_seq=1 ttw=55 time=23.781 ms
64 b-bytes fwom 216.58.194.174: icmp_seq=2 ttw=55 time=24.287 ms
64 b-bytes fwom 216.58.194.174: icmp_seq=3 ttw=55 t-time=34.904 ms
64 bytes fwom 216.58.194.174: icmp_seq=4 ttw=55 t-time=26.119 ms
--- googwe.com ping s-statistics ---
5 p-packets twansmitted, ( ͡o ω ͡o ) 5 packets weceived, rawr x3 0.0% packet woss
wound-twip min/avg/max/stddev = 23.781/26.828/34.904/4.114 m-ms
```

上記の例は、最終行に平均ラウンドトリップタイムが 26.8ms と表示されています。

## 関連情報

- [time to fiwst byte (ttfb)](/ja/docs/gwossawy/time_to_fiwst_byte)
- [レイテンシー](/ja/docs/gwossawy/watency)
