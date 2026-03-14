# UNIZIK Community Hub Design Guide

## Document Summary

- Product: UNIZIK Community Hub
- Goal: Define a modern, clean, mobile-first UI/UX direction for a showcase app
- Draft date: 2026-03-14
- Status: Design direction for concept and prototype work

## 1. Design Intent

The app should feel like a modern African university community product, not a recycled campus portal and not a generic fintech app. It needs to balance institutional trust with everyday usefulness.

The emotional target is:

- credible enough for official university affiliation
- warm enough for community belonging
- sharp enough for premium brand partners
- simple enough for frequent mobile use

## 2. Experience Principles

1. Lead with utility. The first screen should answer "what can I do here today?"
2. Make trust visible. Show verification, official sources, and partner credibility clearly.
3. Keep promotions tasteful. Sponsored content should feel curated, not noisy.
4. Design for scanning. Users should understand each screen in 3 to 5 seconds.
5. Reward repeat use. The product should feel fresher and smarter each time a user returns.
6. Support low-friction discovery. Search, filters, categories, and AI prompts should reduce effort.
7. Age gracefully across life stages. The same app should work for a first-year student and a 10-year alumnus.

## 3. Brand Direction

### Personality

- Intelligent
- Grounded
- Youthful but not childish
- Proudly local
- Optimistic

### Visual Metaphor

Think "scholarly confidence meets connected commerce."

The product should combine:

- the trust of a university seal
- the warmth of community gatherings
- the polish of a modern lifestyle app

## 4. Visual System

### 4.1 Color Palette

Base the palette on a refined interpretation of UNIZIK's institutional green, supported by warm gold and calm neutrals.

#### Primary Colors

- Forest Green `#0D6B43`
- Deep Green `#0A4F33`
- Palm Green `#19A56B`
- Heritage Gold `#D5A437`

#### Neutral Colors

- Ink `#101915`
- Charcoal `#22302A`
- Stone `#5E6A64`
- Mist `#EEF3F0`
- Paper `#F8FAF8`
- White `#FFFFFF`

#### Functional Colors

- Success `#1E9E61`
- Warning `#D48B1E`
- Error `#C44949`
- Info `#2D7FF0`

### 4.2 Color Usage Rules

- Use deep green for trust, headers, and official signals.
- Use brighter green for active states, CTAs, and progress.
- Use gold sparingly for premium highlights, loyalty, and milestone moments.
- Keep the background soft and slightly warm, not stark white.
- Do not use more than one high-saturation accent on a single screen.

### 4.3 Typography

Use a more distinctive pairing than default startup typography.

- Headline font: `Sora`
- Body font: `Manrope`

If those are unavailable:

- Headline fallback: `Plus Jakarta Sans`
- Body fallback: `DM Sans`

Typography tone:

- Headlines should be compact, confident, and slightly editorial.
- Body text should feel neutral and highly readable.
- Avoid oversized academic-serious headings or tiny portal text.

### 4.4 Type Scale

- Display: 34/40 semibold
- H1: 28/34 semibold
- H2: 22/28 semibold
- H3: 18/24 semibold
- Body Large: 16/24 regular
- Body: 14/21 regular
- Label: 12/16 medium
- Micro: 11/14 medium

## 5. Layout System

### Spacing

- Base spacing unit: 4 px
- Core rhythm: 8, 12, 16, 20, 24, 32
- Horizontal padding on mobile: 20 px
- Section gaps: 24 to 32 px

### Shape Language

- Large cards: 24 px radius
- Standard cards: 18 px radius
- Chips and pills: fully rounded
- Bottom sheets: 28 px top radius

### Elevation

- Use soft shadows sparingly
- Prefer layered surfaces through tint and border contrast rather than heavy blur
- Let important cards feel tactile but not glossy

## 6. Iconography and Imagery

### Icons

- Rounded geometric icon set
- Slightly thicker strokes than default system icons
- Avoid overly playful emoji-heavy treatment

### Photography

- Real campus and alumni imagery where available
- Mix portraits, campus moments, study life, entrepreneurship, and community events
- Prefer candid, natural-light photography over stock-like staged imagery

### Illustration

- Use only for onboarding, empty states, and AI moments
- Style should be minimal, flat-to-soft-gradient, and human-centered

## 7. Navigation Model

Use a 5-item bottom navigation for the showcase app:

1. Home
2. Explore
3. AI
4. Community
5. Profile

Rationale:

- `Home` answers immediate needs
- `Explore` houses offers and services
- `AI` gives the concept a distinctive center of gravity
- `Community` supports events, groups, and mentorship
- `Profile` holds identity, wallet, rewards, and settings

The AI tab can be visually emphasized with a slightly elevated circular treatment, but it should not feel gimmicky.

## 8. Home Screen Structure

The home screen should be modular and personalized, not a long generic feed.

Recommended section order:

1. Greeting plus verification badge
2. Search bar with AI shortcut
3. Quick actions
4. Featured offer or campaign
5. Essentials for your segment
6. Upcoming events
7. Recommended people or mentors
8. Community stories or alumni spotlight

### Quick Actions

Recommended first set:

- Ask AI
- Find Deals
- Events
- Jobs
- Businesses
- Campus Help

## 9. Explore Experience

Explore is the commercial and discovery engine. It should feel like a curated marketplace, not a cluttered directory.

### Explore Entry States

- Search-first header
- Category pills
- Featured collections
- Nearby or relevant offers
- Saved and recently viewed

### Category Model

- Essentials
- Food and Groceries
- Transport
- Accommodation
- Health and Wellness
- Learning and Tools
- Jobs and Gigs
- Businesses
- Events
- Mobile Bundles

### Search and Filter Guidance

- Persist user search queries
- Show autocomplete suggestions
- Keep applied filters visible
- Allow multi-select filters
- Avoid overly dense horizontal filter bars

This follows current mobile commerce best practice and will matter because deals and services are core to platform conversion.

## 10. AI Concierge Experience

The AI feature should feel practical, not theatrical.

### Primary Jobs

- Answer campus and community questions
- Recommend relevant services or offers
- Help users discover events, businesses, or opportunities
- Route users to official or verified sources

### UI Pattern

- Conversational interface plus suggested prompts
- Quick chips such as `Accommodation`, `Cheap data`, `Internships`, `Events this week`, `Alumni businesses`
- Source cards below answers when the answer depends on official university information
- Follow-up actions embedded in responses

### Tone

- Helpful
- Plainspoken
- Respectful
- Locally aware
- Never overly robotic

## 11. Community Experience

Community should be structured and moderated. Avoid turning the app into a generic social feed.

### Core Modules

- Events
- Groups or chapters
- Mentorship
- Stories
- Directories

### Recommended UX

- Event cards with date clarity and save state
- Group cards showing relevance and activity
- Mentor cards with faculty, industry, and availability tags
- Story modules that spotlight alumni wins, student achievements, and partner collaborations

## 12. Profile, Wallet, and Trust Layer

Profile should make membership value visible.

### Include

- Verification status
- Campus and faculty identity
- Interests and personalization settings
- Saved offers and events
- Rewards or points
- Referral status
- Privacy and consent controls

### Trust Signals

- Official UNIZIK account badge
- Verified partner badge
- Alumni business badge
- Offer validity labels
- Source attribution on important university answers

## 13. Component Guidance

### Cards

Use three main card types:

1. Editorial card
2. Offer card
3. Utility card

Card anatomy:

- eyebrow or badge
- strong title
- short supporting copy
- image or icon
- one clear action

### Chips

Use chips for:

- category selection
- filters
- verification labels
- campus and faculty tags

### Buttons

- Primary: filled green
- Secondary: tinted green or outlined
- Tertiary: text only with icon

### Banners

- Reserve banners for high-priority official messages or hero partner campaigns
- Never stack more than one promotional banner above the fold

### Lists

- Prefer grouped cards over dense table-like rows
- Break long lists with editorial dividers or saved states

## 14. Motion

Use motion to support orientation and delight, not decoration.

### Recommended Motion Moments

- gentle card rise on app load
- staggered reveal for quick actions
- smooth tab transition
- bottom sheet expansion for filters and AI actions
- subtle success animation on redemption or save

### Avoid

- parallax-heavy hero areas
- bouncing icons
- long loading sequences
- excessive shimmer effects

## 15. Accessibility and Performance

### Accessibility

- Minimum body size 14 px
- Strong contrast on green surfaces
- Support dynamic type scaling where possible
- Do not encode status using color alone
- Ensure tap targets are at least 44 x 44 px

### Performance

- Optimize for mid-range Android devices first
- Use lazy loading for image-heavy lists
- Keep AI response states clear during slow network conditions
- Provide offline-friendly stubs for saved content and important utility items

## 16. Content Design

### Voice

- clear
- modern
- respectful
- useful
- lightly aspirational

### Avoid

- bureaucratic university language
- dense institutional paragraphs
- hard-sell advertising tone
- slang that will age quickly

### Example Microcopy Direction

- "Verified for UNIZIK students"
- "Offers that actually fit your week"
- "Ask anything about campus, deals, or opportunities"
- "Built for the UNIZIK community"

## 17. Recommended Key Screens For A Showcase Prototype

1. Splash and onboarding
2. Verification and profile setup
3. Personalized home
4. Explore with categories and filters
5. Offer detail screen
6. AI concierge screen
7. Events and community screen
8. Mentor or alumni business profile
9. Profile, wallet, and rewards

## 18. Anti-Patterns To Avoid

1. Portal-style dashboards with too many equal-weight shortcuts
2. Tiny text and dense institutional menu trees
3. Over-branding every surface with crests, seals, and ceremonial imagery
4. Ad-heavy feeds that erode trust
5. Generic chatbot UI that feels disconnected from the rest of the product
6. Dark mode as the primary visual concept for a trust-first university product

## 19. Suggested Design North Star

If the current concept decks feel like enterprise presentations, this app should feel like the product those presentations were trying to promise.

The best version of the UNIZIK Community Hub is:

- as trustworthy as an official university channel
- as useful as a student utility app
- as discoverable as a modern marketplace
- as warm as an alumni community

## 20. Source Notes

- UNIZIK homepage: <https://unizik.edu.ng/>
- UNIZIK campuses: <https://unizik.edu.ng/campuses/>
- UNT North Texas Network example: <https://university-of-north-texas.us.hivebrite.com/>
- Hivebrite JA Worldwide case study: <https://go.hivebrite.com/hubfs/customer-stories/ja-worldwide.pdf>
- Almabase business directory: <https://www.almabase.com/product/business-directory>
- Apple Human Interface Guidelines: <https://developer.apple.com/design/human-interface-guidelines/>
- Baymard product list and filtering best practices: <https://baymard.com/blog/current-state-product-list-and-filtering>
- Baymard autocomplete design patterns: <https://baymard.com/blog/autocomplete-design>
