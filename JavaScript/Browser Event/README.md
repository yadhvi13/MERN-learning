#browser event
1.) What is Event?
-They are just announcements done by Browser example: click,doubleclick,scroll,key press, action,scroll etc.

2.)What is Event Target?
- It's an enitity, jaha pe event receive hua ho, uske pass maybe bhi event-listeners use hue honge.
- elements present inside HTML, those element are Event-Target {example- button} 
- and the actions perfoms on that button called events,
- the location where action stored, called Event-listeners.
- we can add (or) remove various add Event Listeners() to any elements,        

#syntax of Event-listener to apply any event:
<event-target>.addEventListener(<event-type>, <function -> action>)

#We can monitor What are the event listeners, by using-
# monitorevent(document);