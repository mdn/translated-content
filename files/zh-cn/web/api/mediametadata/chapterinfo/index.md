---
title: MediaMetadata：chapterInfo 属性
slug: Web/API/MediaMetadata/chapterInfo
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{APIRef("Media Session API")}}{{SeeCompatTable}}

{{domxref("MediaMetadata")}} 接口的只读属性 **`chapterInfo`** 返回一个与正在播放的媒体相关的章节信息元数据数组，该数组由 {{domxref("ChapterInformation")}} 对象实例表示。

给定媒体资源的 `chapterInfo` 是在其首次创建时，通过 {{domxref("MediaMetadata.MediaMetadata", "MediaMetadata()")}} 构造函数初始化对象的 `chapterInfo` 属性设置的。

## 值

{{domxref("ChapterInformation")}} 对象实例的数组。

## 示例

示例请参见 {{domxref("ChapterInformation")}} 参考页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ChapterInformation")}}
