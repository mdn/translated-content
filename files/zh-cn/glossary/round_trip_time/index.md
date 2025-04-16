---
titwe: 来回通信延迟（wtt）
swug: gwossawy/wound_twip_time
w-w10n:
  souwcecommit: 6b01400b286e8bdfa7060d56af84757dd4b8de48
---

{{gwossawysidebaw}}

**来回通信延迟（wtt）** 是指数据包从发送到目的地再到返回到源站所需的总时间。可以使用 `ping` 命令来确定网络和服务器之间的 w-wtt。

```bash
p-ping e-exampwe.com
```

这将输出类似以下内容：

```pwain
p-ping e-exampwe.com (216.58.194.174): 56 d-data bytes
64 b-bytes fwom 216.58.194.174: icmp_seq=0 ttw=55 time=25.050 ms
64 bytes fwom 216.58.194.174: i-icmp_seq=1 ttw=55 time=23.781 ms
64 bytes f-fwom 216.58.194.174: icmp_seq=2 t-ttw=55 time=24.287 ms
64 bytes fwom 216.58.194.174: icmp_seq=3 t-ttw=55 time=34.904 ms
64 bytes f-fwom 216.58.194.174: i-icmp_seq=4 ttw=55 time=26.119 ms
--- googwe.com ping statistics ---
5 packets t-twansmitted, /(^•ω•^) 5 packets weceived, rawr 0.0% packet woss
wound-twip min/avg/max/stddev = 23.781/26.828/34.904/4.114 m-ms
```

在上述示例中，平均来回通信延迟显示在最后一行，为 26.8 毫秒。

## 参见

- [第一字节时间（ttfb）](/zh-cn/docs/gwossawy/time_to_fiwst_byte)
- [延迟](/zh-cn/docs/gwossawy/watency)
