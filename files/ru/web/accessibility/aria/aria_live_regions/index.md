---
title: ARIA Live Regions
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
translation_of: Web/Accessibility/ARIA/ARIA_Live_Regions
---

## Introduction

In the past, a web page change could only be spoken in entirety which often annoyed a user, or by speaking very little to nothing, making some or all information inaccessible. Until recently, screen readers have not been able to improve this because no standardized markup existed to alert the screen reader to a change. ARIA live regions fill this gap and provide suggestions to screen readers regarding whether and how to interrupt users with a change.

## Simple Live Regions

Dynamic content which updates without a page reload is generally either a region or a widget. Simple content changes which are not interactive should be marked as live regions. Below is a list of each related ARIA live region property with a description.

1. **aria-live**: The aria-live=POLITENESS_SETTING is used to set the priority with which screen reader should treat updates to live regions - the possible settings are: off/polite/assertive. The default setting is 'off'. This attribute is by far the most important.
2. **aria-controls**: The aria-controls=\[IDLIST] is used to associate a control with the regions that it controls. Regions are identified just like an ID in a div, and multiple regions can be associated with a control using a space, e.g. aria-controls="myRegionID1 myRegionsID2".

    > **Предупреждение:** Not known if the aria-controls aspect of live regions is implemented in current ATs, or which. Needs research.

Normally, only aria-live="polite" is used. Any region which receives updates that are important for the user to receive, but not so rapid as to be annoying, should receive this attribute. The screen reader will speak changes whenever the user is idle.

For regions which are not important, or would be annoying because of rapid updates or other reasons, silence them with aria-live="off".

### Simple Use Case: combobox updates useful on-screen information

A website specializing in providing information about birds provides a drop down box. When a bird is selected from the drop down, a region on the page is updated with details about the type of bird selected.

`<select size="1" id="bird-selector" aria-controls="bird-info"><option> .... </select>`

`<div role="region" id="bird-info" aria-live="polite">`

As the user selects a new bird, the info is spoken. Because "polite" is chosen, the screen reader will wait until the user pauses. Thus, moving down the list will not speak every bird the user visits, only the one finally chosen.

## Preferring Specialized Live Region Roles

In the following well-known predefined cases it is better to use a specific provided "live region role":

| Role        | Description                                                                                                                                                                          | Compatibility Notes                                                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log         | Chat, error, game or other type of log                                                                                                                                               | To maximize compatibility, add a redundant aria-live="polite" when using this role.                                                                                                                              |
| status      | A status bar or area of the screen that provides an updated status of some kind. Screen reader users have a special command to read the current status.                              | To maximize compatibility, add a redundant aria-live="polite" when using this role.                                                                                                                              |
| alert       | Error or warning message that flashes on the screen. Alerts are particularly important for client side validation notices to users. (TBD: link to ARIA form tutorial with aria info) | To maximize compatibility, some people recommend adding a redundant aria-live="assertive" when using this role. However, adding both aria-live and role=alert causes double speaking issues in VoiceOver on iOS. |
| progressbar | A hybrid between a widget and a live region. Use this with aria-valuemin, aria-valuenow and aria-valuemax. (TBD: add more info here).                                                |                                                                                                                                                                                                                  |
| marquee     | for text which scrolls, such as a stock ticker.                                                                                                                                      |                                                                                                                                                                                                                  |
| timer       | or any kind of timer or clock, such as a countdown timer or stopwatch readout.                                                                                                       |                                                                                                                                                                                                                  |

## Advanced Live Regions

(TBD: what is supported where?)

1. **aria-atomic**: The aria-atomic=BOOLEAN is used to set whether or not the screen reader should always present the live region as a whole, even if only part of the region changes - the possible settings are false/true where false is the default.
2. [**aria-relevant**](/ru/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-relevant_attribute): The aria-relevant=\[LIST_OF_CHANGES] is used to set what types of changes are relevant to a live region - the possible settings are additions/removals/text/all where "additions text" is the default.
3. **aria-labelledby**: The aria-labelledby=\[IDLIST] is used to associate a region with its labels, similar to aria-controls but instead associating labels to the region and again label identifiers are separated with a space.
4. **aria-describedby**: The aria-describedby=\[IDLIST] is used to associate a region with its descriptions, similar to aria-controls but instead associating descriptions to the region and description identifiers are separated with a space.

### Advanced Use Case: Roster

A chat site would like to display a list of users currently logged on. Display a list of users where a user's log-in and log-out status will be reflected dynamically (without a page reload).

```html
<ul id="roster" aria-live="polite" aria-relevant="additions removals">
  <!-- use JavaScript to add remove users here-->
</ul>
```

Breakdown of ARIA live properties:

- aria-live="polite" indicates that the screen reader should wait until the user is idle before presenting updates to the user. This is the most commonly used value, as interrupting the user with "assertive" might interrupt their flow.
- aria-atomic is not set ("false" by default) so that only the added or removed users should be spoken and not the entire roster each time.
- aria-relevant="additions removals" ensures that both users added or removed to the roster will be spoken.

TBD: Realistic use case for aria-atomic="true"
