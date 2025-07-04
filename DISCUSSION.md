===== TODO =====
[X] fix <th> child of <thead>
    - fixing HTML error
[X] investigate hydration error
    - fixing HTML error
[X] add key prop to list children
    - fixing React error
    - list children need key props in order to identify
      when an element's data has changed and needs to be
      rerendered with the updated state
[X] move advocates page to /advocates route
    - moving advocates functionality to separate route
      to open up future feature routes
[X] redirect home page to /advocates route
    - redirect to keep current functionality the same
      as initial repo
[X] remove leftover debugging statements
    - misc cleanup
[X] remove page metadata from global layout
    - the global layout is used for every page
    - each page should have its own metadata for SEO
[X] create AdvocatesSearch
    - move page functionality into a child client component
[X] refactor advocates page as server component
    - top page component should probably be a server component
      so that common site-wide functionality, eg. authorization,
      or code can be run without exposing secrets, eg. tokens
[X] add page metadata to advocates page
    - added page metadata for advocate search
[X] create types for advocate data
    - started creating shared types so backend and frontend
      can eventually verify against this contract
[X] fix search filter error
    - converting numbers to strings before performing filter
      comparisons
[X] refactor search term state management
    - refactor direct DOM manipulation to using React controlled
      input to stay within the React render loop and avoid bugs
[X] remove redundant filteredAdvocates state
    - unnecessary to have a second filteredAdvocates state variable
      when the logic can be performed before rendering
[X] refactor advocate filter to case insensitive
    - previous implementation was case-sensitive and would likely
      frustrate users
[X] render merged name fields
    - users unlikely to need advocate data fields broken out into
      smallest parts
    - displaying last name then first, because users probably
      recognize and refer to their doctor by last name, eg. "Dr. Smith"
[X] update global layout
    - layout tweaks to center page and add some whitespace
[X] update page layout
    - layout tweaks to center page and add some whitespace
[X] implement sort order dropdown
    - add dropdown as an additional way to parse the data
    - users may want to search by descending years of experience
[X] refactor table as advocate profile cards
    - table format of data is very dense and not user friendly
    - card format is easier on the eyes
[X] add viewport meta tag to global layout
    - misc chrome dev tools fix
[X] update advocate list with responsive styles
    - users may be using the site on their phone
    - additional reason for using card layout for advocate
      profiles
[X] refine advocate profile card
    - prettify the card layout with the expectation that
      advocate headshots will be available
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
[ ] investigate fuzzy search for advocate filtering
    - users may not know the exact spelling of complex
      medical terms
    - showing fuzzy matches or adjacent terms, such as
      radiology and x-ray, could improve usability
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
