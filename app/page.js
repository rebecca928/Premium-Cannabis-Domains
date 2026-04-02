export default function Page() {
  const domains = [
    {
      name: 'AiryCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Light, modern, lifestyle-driven brand positioning',
      tags: ['Lifestyle', 'Beverage', 'Low-dose'],
      featured: true,
    },
    {
      name: 'AmpCanna.com',
      label: 'PREMIUM DOMAIN',
      hook: 'High-energy shorthand built for modern cannabis brands with momentum',
      tags: ['Energy', 'Function', 'Performance'],
    },
    {
      name: 'BlackCatCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Bold, edgy equity for night, pre-roll, or culture-forward lines',
      tags: ['Edgy', 'Night', 'Pre-roll'],
    },
    {
      name: 'BigTimeCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Broad, memorable scale for retail-forward or mass premium plays',
      tags: ['Mass', 'Value', 'Retail'],
    },
    {
      name: 'CAPSCanna.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Clean, clinical shorthand ideal for capsules and wellness formats',
      tags: ['Capsules', 'Wellness', 'Precision'],
    },
    {
      name: 'CAPSCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A more explicit extension of the CAPS platform for capsule-led brand systems',
      tags: ['Capsules', 'Wellness', 'Platform'],
    },
    {
      name: 'CannaRouter.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A smart, systems-driven name for B2B, logistics, or distribution',
      tags: ['Tech', 'Distribution', 'B2B'],
    },
    {
      name: 'Cannabis-Sales.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Direct, high-intent authority for sales platforms and services',
      tags: ['B2B', 'Platform', 'Marketplace'],
    },
    {
      name: 'AmplitudeCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A scalable, modern brand name with room for premium expansion',
      tags: ['Modern', 'Scalable', 'Premium'],
    },
    {
      name: 'FatBoyCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A loud, memorable personality play with room for culture and attitude',
      tags: ['Bold', 'Culture', 'Character'],
    },
    {
      name: 'PhatBoyCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'An even more stylized expression for heritage, swagger, and standout recall',
      tags: ['Street', 'Attitude', 'Recall'],
    },
    {
      name: 'CrownBotanicals.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Elevated and refined for a premium botanical or wellness-forward house brand',
      tags: ['Premium', 'Botanical', 'Wellness'],
    },
    {
      name: 'HighClubCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Social, aspirational naming built for members, loyalty, or elevated lifestyle',
      tags: ['Club', 'Lifestyle', 'Membership'],
    },
    {
      name: 'FlightClubCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A strong experiential name for flights, sampling, or connoisseur culture',
      tags: ['Flights', 'Experience', 'Culture'],
    },
    {
      name: 'ArticleOrganics.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Editorial and refined with a modern natural-products sensibility',
      tags: ['Editorial', 'Organic', 'Refined'],
    },
    {
      name: 'AritcleCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A stylized cannabis naming play with distinctive branding potential',
      tags: ['Distinctive', 'Modern', 'Brandable'],
    },
    {
      name: 'Pffed.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Short, punchy, and highly memorable for a modern product or platform brand',
      tags: ['Short', 'Modern', 'Memorable'],
    },
    {
      name: 'SwellCanna.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Smooth, positive, surf-adjacent shorthand with flexible lifestyle upside',
      tags: ['Lifestyle', 'Surf', 'Modern'],
    },
    {
      name: 'SwellsCanna.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A more dynamic plural version with product-line and campaign flexibility',
      tags: ['Product', 'Lifestyle', 'Flexible'],
    },
    {
      name: 'SwellsCBD.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A naturally extension-ready name for CBD-specific products and education',
      tags: ['CBD', 'Extension', 'Wellness'],
    },
    {
      name: 'TopHitCanna.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Performance-forward and catchy with room for potency or music-inspired branding',
      tags: ['Potency', 'Catchy', 'Performance'],
    },
    {
      name: 'ElaraCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Elegant and celestial with premium appeal for a sophisticated house brand',
      tags: ['Elegant', 'Premium', 'Celestial'],
    },
    {
      name: 'TorqueExtracts.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Mechanically inspired power branding built for concentrates and extracts',
      tags: ['Extracts', 'Power', 'Performance'],
    },
    {
      name: 'TorqueCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A broader platform name with force, energy, and expansion potential',
      tags: ['Power', 'Brand System', 'Expansion'],
    },
    
    {
      name: 'NodsCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A subtle, clever name with social signal and insider-brand potential',
      tags: ['Clever', 'Social', 'Insider'],
    },
    {
      name: 'AxonCannabis.com',
      label: 'PREMIUM DOMAIN',
      hook: 'A sharp, modern science-forward name for a progressive cannabis platform',
      tags: ['Science', 'Modern', 'Platform'],
    },
    {
      name: 'AxonExtracts.com',
      label: 'PREMIUM DOMAIN',
      hook: 'Focused and technical for an extracts line with modern credibility',
      tags: ['Extracts', 'Technical', 'Credible'],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(70,255,130,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(80,130,255,0.08),transparent_25%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-white/65">
            CURATED DIGITAL BRAND ASSETS
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
            PREMIUM CANNABIS <br /> BRAND DOMAINS
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
            The launchpad for license-holders to secure a premium name at the very foundation of the brand.
            Strategic domains with built-in relevance, recall, and long-term value.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity">
              View Available Domains
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Request Private Access
            </button>
          </div>
          <div className="mt-8 text-sm text-white/45">
            Each domain is offered exclusively. Once acquired, it’s gone.
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 md:px-10 pb-20 md:pb-28">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs tracking-[0.24em] text-white/40 mb-3">FEATURED INVENTORY</div>
            <h2 className="text-2xl md:text-3xl font-semibold">Available Premium Domains</h2>
            <p className="mt-3 text-white/55 max-w-2xl">
              Presented like strategic assets, not commodity listings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-[260px] md:auto-rows-[280px]">
          {[...domains].sort((a,b)=>a.name.localeCompare(b.name)).map((domain, index) => {
            const isFeatured = domain.featured;
            return (
              <div
                key={domain.name}
                className={[
                  'group relative rounded-[32px] p-[1px] transition-transform duration-300 hover:-translate-y-1',
                  isFeatured
                    ? 'bg-[linear-gradient(135deg,rgba(195,255,130,0.35),rgba(255,255,255,0.08),rgba(130,170,255,0.22),rgba(255,120,190,0.20))] md:row-span-2'
                    : 'bg-white/10 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]'
                ].join(' ')}
              >
                <div className="relative h-full rounded-[31px] border border-white/10 bg-[#050505]/95 p-6 md:p-7 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(150,255,170,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(130,170,255,0.10),transparent_30%)]" />

                  <div className="relative h-full flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-[10px] tracking-[0.24em] text-white/55">
                        {domain.label}
                      </div>
                      <div className="text-xs text-white/25">0{index + 1}</div>
                    </div>

                    <div className="mt-auto">
                      <div className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight max-w-[14ch]">
                        {domain.name}
                      </div>
                      <p className="mt-4 text-base text-white/58 leading-relaxed max-w-[32ch]">
                        {domain.hook}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {domain.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 text-sm text-white/72 group-hover:text-white transition-colors">
                      → View Details
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xs tracking-[0.24em] text-white/40 mb-3">WHY IT MATTERS</div>
            <h3 className="text-2xl font-semibold">A premium name does more than brand the business.</h3>
          </div>
          <div className="text-white/60 leading-relaxed">
            In cannabis, the right domain can support stronger menu visibility, easier recall, better search relevance, and a more ownable launch story from day one.
          </div>
          <div className="grid gap-3 text-sm text-white/70">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">Alphabetical and menu-positioning advantages</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">Built-in industry relevance and keyword authority</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">Stronger foundation for long-term brand equity</div>
          </div>
        </div>
      </section>
    </div>
  );
}
