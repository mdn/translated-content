---
title: SyncManager
slug: Web/API/SyncManager
l10n:
  sourceCommit: 56df677713fecf43ec0eb8862cb91c141aaa0005
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

{{domxref("Background Synchronization API", "", "", "nocode")}}의 **`SyncManager`** 인터페이스는 동기화 등록들을 등록하고 나열하기 위한 인터페이스를 제공합니다.

## 인스턴스 속성

없음.

## 인스턴스 메서드

- {{domxref("SyncManager.register()")}}
  - : 새 동기화 등록을 생성하고 {{jsxref("Promise")}}를 반환합니다.
- {{domxref("SyncManager.getTags()")}}
  - : `SyncManager` 등록들에 대한 개발자 정의 식별자 목록을 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
