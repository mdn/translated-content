---
title: NavigatorConcurrentHardware
slug: orphaned/Web/API/NavigatorConcurrentHardware
tags:
  - API
  - Concurrency
  - HTML DOM
  - Interface
  - Navigator
  - NavigatorCPU
  - NavigatorConcurrentHardware
  - NeedsBrowserCompatibility
  - NeedsTranslation
  - Reference
  - Threading
  - Threads
  - TopicStub
  - WorkerNavigator
  - Workers
translation_of: Web/API/NavigatorConcurrentHardware
original_slug: Web/API/NavigatorConcurrentHardware
---
{{APIRef("HTML DOM")}}

The **`NavigatorConcurrentHardware`** {{Glossary("mixin")}} adds to the {{domxref("Navigator")}} interface features which allow Web content to determine how many logical processors the user has available, in order to let content and Web apps optimize their operations to best take advantage of the user's CPU.

{{AvailableInWorkers}}

The number of **logical processor cores** is a way to measure the number of threads which can effectively be run at once without them having to share CPUs. Modern computers have multiple physical cores in their CPU (two or four cores is typical), but each physical core is also usually able to run more than one thread at a time using advanced scheduling techniques. So a four-core CPU may return 8. The browser may, however, choose to reduce the number in order to represent more accurately the number of {{domxref("Worker")}}s that can run at once

## Properties

- {{domxref("NavigatorConcurrentHardware.hardwareConcurrency")}} {{readonlyinline}}
  - : Returns the number of logical processors which may be available to the user agent. This value is always at least 1, and will be 1 if the actual number of logical processors can't be determined.

## Methods

_The `NavigatorConcurrentHardware`_ _mixin has no methods._

## Specifications

| Specification                                                                                                            | Status                           | Comment             |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName('HTML WHATWG', '#navigatorconcurrenthardware', 'NavigatorConcurrentHardware')}} | {{Spec2('HTML WHATWG')}} | Initial definition. |

## Browser compatibility

{{Compat("api.NavigatorConcurrentHardware")}}

## See also

- {{domxref("Navigator")}}
- {{domxref("WorkerNavigator")}}
