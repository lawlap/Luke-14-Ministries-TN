import PageHero from '@/components/PageHero';
import { asset } from '@/lib/site';

export const metadata = { title: 'Newsletter' };

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        image={asset('/images/Nigeria_December_2019_0078.jpg')}
        title="Newsletter"
      />

      <section className="container-site py-14 max-w-3xl mx-auto text-center">
        <div className="prose-site">
          <p>
            The Luke 14 Newsletter is published three times yearly to keep our
            friends and supporters aware of what is going on in our ministry.
            If you would like to receive our newsletter, please fill out the
            form below!
          </p>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdzDoq7UTlTD0VmZhiLtF46Vs0eIRtyYS6QlSLHgvNT34KeWw/viewform"
          target="_blank"
          rel="noopener"
          className="btn-primary mt-10 inline-block text-lg"
        >
          Sign Up for the Newsletter
        </a>
      </section>
    </>
  );
}
