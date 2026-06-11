import { LegalLayout } from '@/components/legal-layout'

export const metadata = {
  title: 'Privacy Policy - Studio Auriana',
  description: 'Read our privacy policy to understand how we handle your personal information',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">1. Introduction</h2>
          <p>
            Studio Auriana ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you visit our website and make purchases from us.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information in various ways, including information you provide directly to us and information collected 
            automatically through our website.
          </p>
          
          <h3 className="text-xl font-serif font-bold text-maroon-600 mb-3 mt-4">2.1 Information You Provide</h3>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Account Information:</strong> Name, email address, phone number, and password</li>
            <li><strong>Billing & Shipping Information:</strong> Address, city, state, postal code, and country</li>
            <li><strong>Payment Information:</strong> Credit card details, bank account information (processed securely)</li>
            <li><strong>Communication:</strong> Messages, feedback, and inquiries you send us</li>
            <li><strong>Survey Data:</strong> Responses to surveys, contests, and promotional offers</li>
          </ul>

          <h3 className="text-xl font-serif font-bold text-maroon-600 mb-3 mt-4">2.2 Automatically Collected Information</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent, clicks, and navigation patterns</li>
            <li><strong>Cookies & Tracking:</strong> Cookies, pixels, and similar tracking technologies</li>
            <li><strong>Location Data:</strong> Approximate geographic location based on IP address</li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            Studio Auriana uses your information for various purposes:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send promotional emails and marketing communications (with your consent)</li>
            <li>Improve our website, products, and services</li>
            <li>Prevent fraudulent transactions and enhance security</li>
            <li>Comply with legal obligations and law enforcement requests</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Personalize your shopping experience</li>
          </ul>
        </section>

        {/* Cookies & Tracking */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">4. Cookies & Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our website:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
            <li><strong>Analytical Cookies:</strong> Help us understand how you use our website</li>
            <li><strong>Marketing Cookies:</strong> Track your interests for personalized advertising</li>
          </ul>
          <p>
            You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">5. Data Security</h2>
          <p className="mb-4">
            Studio Auriana implements comprehensive security measures to protect your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li>SSL encryption for all sensitive data transmission</li>
            <li>Secure payment gateways and PCI compliance</li>
            <li>Regular security audits and updates</li>
            <li>Restricted access to personal information</li>
            <li>Secure data storage with firewalls and intrusion detection</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure. While we strive to protect your information, 
            we cannot guarantee absolute security.
          </p>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">6. Data Sharing & Third Parties</h2>
          <p className="mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
            <li><strong>Service Providers:</strong> Shipping carriers, payment processors, and hosting providers</li>
            <li><strong>Marketing Partners:</strong> For promotional purposes with your consent</li>
            <li><strong>Legal Requirements:</strong> Law enforcement and government agencies when required by law</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
          </ul>
          <p>
            We do not sell your personal information to third parties for their marketing purposes.
          </p>
        </section>

        {/* User Rights */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">7. Your Privacy Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Access:</strong> Request a copy of your personal information</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
            <li><strong>Data Portability:</strong> Request your data in a portable format</li>
          </ul>
        </section>

        {/* Children's Privacy */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">8. Children's Privacy</h2>
          <p>
            Studio Auriana's website is not intended for children under the age of 13. We do not knowingly collect personal 
            information from children. If we become aware that we have collected information from a child under 13, we will 
            promptly delete such information and take appropriate action.
          </p>
        </section>

        {/* Third-Party Links */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. This Privacy Policy applies only to our website. We are not 
            responsible for the privacy practices of external sites. Please review their privacy policies before providing 
            personal information.
          </p>
        </section>

        {/* Policy Updates */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">10. Changes to This Privacy Policy</h2>
          <p>
            Studio Auriana may update this Privacy Policy from time to time. We will notify you of material changes by posting 
            the updated policy on our website and updating the "Last Updated" date. Your continued use of our website constitutes 
            acceptance of any changes.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">11. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply 
            with legal obligations, and resolve disputes. You can request deletion of your information at any time, subject to 
            legal retention requirements.
          </p>
        </section>

        {/* International Transfers */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">12. International Data Transfers</h2>
          <p>
            Studio Auriana operates in India. Your information may be transferred to, stored in, and processed in India or other 
            countries. By using our website, you consent to the transfer of your information to countries outside your country 
            of residence, which may have different data protection rules.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">13. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
          </p>
          <div className="bg-ivory-100 p-6 rounded-lg space-y-2">
            <p><strong>Studio Auriana</strong></p>
            <p><strong>Founder:</strong> Seema Samar</p>
            <p><strong>Email:</strong> aurianajewels12@gmail.com</p>
            <p><strong>Phone:</strong> 9829387473</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </section>
      </div>
    </LegalLayout>
  )
}
