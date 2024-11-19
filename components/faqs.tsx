export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 md:pb-20">
            <h2 className="h2 font-hkgrotesk">FAQs</h2>
          </div>
          {/* Columns */}
          <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What is the difference between the versions?</h4>
                <p className="text-slate-500">
                The Open Source version is self-hosted and ideal for technical teams. The Hosted version provides a turn-key solution with hosting, regular updates, and dedicated support for a seamless experience.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Who is Kat Gov designed for?</h4>
                <p className="text-slate-500">
                Kat Gov is built for Community Projects and DAOs, offering scalable governance tools to meet the unique needs of both smaller and larger organizations.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Do I need technical expertise to use Kat Gov?</h4>
                <p className="text-slate-500">
                Not with the Hosted version! We manage hosting, updates, and maintenance so you can focus on growth. Self-hosting the Open Source version does require technical skills.
                </p>
              </div>
            </div>
            {/* Column */}
            <div className="w-full md:w-1/2 space-y-8">
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">Do you offer any discounts</h4>
                <p className="text-slate-500">
                Yes, we offer annual discounts to Hosted version customers, helping you save on governance tools while enjoying long-term support for your organization.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">How is pricing determined?</h4>
                <p className="text-slate-500">
                Pricing is based on whether you're a Community Project or a DAO, ensuring plans are tailored to meet your structure, scale, and governance requirements.
                </p>
              </div>
              {/* Item */}
              <div className="space-y-2">
                <h4 className="text-xl font-hkgrotesk font-medium">What forms of payment do you accept?</h4>
                <p className="text-slate-500">
                We exclusively accept payments in $NACHO and $KAS, reinforcing our commitment to the Kaspa ecosystem and decentralization principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}