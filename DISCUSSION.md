===== TODO =====
[X] fix <th> child of <thead>
[X] investigate hydration error
[X] add key prop to list children
[X] move advocates page to /advocates route
[X] redirect home page to /advocates route
[X] remove leftover debugging statements
[X] remove page metadata from global layout
[X] create AdvocatesSearch
[X] refactor advocates page as server component
[X] add page metadata to advocates page
[X] create types for advocate data
[X] fix search filter error
[X] refactor search term state management
[X] remove redundant filteredAdvocates state
[X] refactor advocate filter to case insensitive
[X] render merged name fields
[X] update global layout
[X] update page layout
[X] implement sort order dropdown
[X] refactor table as advocate profile cards
[X] add viewport meta tag to global layout
[X] update advocate list with responsive styles
[X] refine advocate profile card
[ ] add "More/Less" link to expand/shrink specialties list
    - allow advocate profile cards to render more uniformly
      until a user explicitly expands an item
[ ] audit overflow layout issues with long profile names
    - seed data only contains English names
    - need to add ellipsis for text overflow
[ ] investigate profile card modal concept
    - activated when user clicks on a given card to give
      a full layout view of advocate details without 
      clipping information
[ ] implement backend search capability
    - extend backend to allow querying records
    - fetch should accept a payload of fetch criteria
    - need to perform query filtering on backend because
      frontend can't/shouldn't handle entire table scans
      of millions of records
[ ] integrate frontend with backend search
    - frontend should pass a payload of search criteria
      to backend
    - response would be the records to display for the
      user's current visible view
[ ] implement lazy loading
    - alternative to manual pagination clicks to make
      mobile use easier
[ ] audit for a11y compliance
    - website needs to be accessible since target audience
      has health issues
[ ] replace search form elements with open source libraries
    - a11y compliance takes a lot of work
[ ] implement localization
    - non-English speakers would also benefit tremendously
      from advocates
    - adopting localization can get messy if core concepts
      are not integrated early even if English is the only
      supported language initially
[ ] implement virtualized lists
    - determine if this is really necessary or if users will
      get bored of scrolling before performance breaks down
[ ] investigate mosaic layout for cards
    - might look prettier without the gaps between differently
      sized cards
