# Solution explainer

#### Any particular callouts/notable design decisions?

- Am unsure whether one would land on a settings or homepage view.
- The footer link isn't visible enough on each of the different patters.
- Perhaps need to consider more accessible colour scheme's for the "modal" / settings panel. The contrast ratio would need to be considered.

#### If this project continued, anything else you would like to add?

- Maybe add the ability to save this theme to local storage rather than always having to fetch the theme from an endpoint, although this might be overkill.
- Possibly look into the behaviour of the theme application. I'd prefer (as a user) to have the ability to "preview" the theme background before applying it. (This is based on the understanding that the "apply theme" button is what commits setting.)

There's plenty I would include from a code perspective...

- Make use of PropTypes.
- At the very least write basic component tests using React testing library.
- Fetch the data correctly

#### Anything else of note you'd like the interviewers to know about?

- I worked on this for one hour after setting up ViteJS, ESLint etc...
- I'd already had time to think about what I was going to implement and sketched out a very basic wireframe on paper of how I'd like things to be structured.
- It's possible to see the completed version, by checking out the `finished-version` branch, although I had spent around 2.5 hours then in total I believe, but I couldn't leave it alone. (the original `.git` dir has been removed for the demo but essentially the polish is what was added past the 1 hour mark).
