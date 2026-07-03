import PageHero from '@/components/PageHero';
import { asset } from '@/lib/site';

export const metadata = { title: 'Pray' };

export default function PrayPage() {
  return (
    <>
      <PageHero
        image={asset('/images/DSC_0975.jpg')}
        title="Pray With Us"
      />

      <section className="container-site py-14 max-w-3xl mx-auto text-center">
        <div className="prose-site">
          <p>
            Our prayer warriors are one of the most powerful groups aiding our
            ministry. Those who boldly approach Our Savior with prayer give God
            the opportunity to fill our friends with His spirit and spread His
            love through our volunteers.
          </p>
          <p>
            Once you&rsquo;ve added us to your prayer list, you can follow us
            on social media to learn about our current needs, and sign up for
            our prayer team below!
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScqxcUlvDJkws9tDfSTEXqSstscSm_kzovkWCHUX1KFHa6DGg/viewform"
          target="_blank"
          rel="noopener"
          className="btn-primary mt-10 inline-block text-lg"
        >
          Join Our Prayer Team
        </a>
      </section>
    </>
  );
}
