import { LegalLayout } from '@/components/legal-layout'

export const metadata = {
  title: 'Terms & Conditions - Studio Auriana',
  description: 'Read our terms and conditions for purchasing from Studio Auriana',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions">
      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing and using the Studio Auriana website and purchasing our products, you agree to be bound by these Terms & Conditions. 
            If you do not agree to abide by the above, please do not use this service. Studio Auriana reserves the right to update, 
            change, or replace any portion of these Terms & Conditions by posting updates and changes to our website.
          </p>
        </section>

        {/* Product Information */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">2. Product Information</h2>
          <p className="mb-4">
            All products sold on our website are described to the best of our ability. We make every effort to ensure that product images, 
            descriptions, and pricing are accurate. However, we do not warrant that product descriptions, pricing, or other content 
            is accurate, complete, reliable, current, or error-free.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>All artificial jewelry is carefully crafted and quality-tested before shipping</li>
            <li>Colors may appear slightly different due to lighting and screen resolution</li>
            <li>We maintain the right to limit quantities and cancel orders as needed</li>
            <li>Prices are subject to change without notice</li>
          </ul>
        </section>

        {/* Ordering & Payment */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">3. Ordering & Payment</h2>
          <p className="mb-4">
            When you place an order on Studio Auriana, you are offering to purchase products from us. Your order represents an offer 
            to purchase these products and is subject to our acceptance and availability.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>All prices are in Indian Rupees unless stated otherwise</li>
            <li>Payment must be received before order processing</li>
            <li>We accept various payment methods as displayed on our website</li>
            <li>You agree to provide accurate and complete billing information</li>
          </ul>
        </section>

        {/* Shipping & Delivery */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">4. Shipping & Delivery</h2>
          <p className="mb-4">
            Studio Auriana ships to addresses within India. Delivery times are estimates and not guaranteed. We are not responsible 
            for delays caused by third-party shipping carriers.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Standard shipping typically takes 3-7 business days</li>
            <li>Express shipping options are available for additional fees</li>
            <li>Tracking information will be provided via email</li>
            <li>Risk of loss passes to you upon delivery to the carrier</li>
          </ul>
        </section>

        {/* Returns & Refunds */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">5. Returns & Refunds</h2>
          <p className="mb-4">
            Studio Auriana is committed to customer satisfaction. Our return policy is as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Items must be returned within 7 days of delivery</li>
            <li>Products must be unused and in original condition</li>
            <li>Return shipping costs are the responsibility of the customer</li>
            <li>Refunds will be processed within 7-10 business days of receipt</li>
            <li>Custom or personalized items are non-returnable</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">6. Intellectual Property Rights</h2>
          <p>
            All content on the Studio Auriana website, including text, graphics, logos, images, and software, is the property of 
            Studio Auriana or its content suppliers and is protected by international copyright laws. You may not reproduce, 
            distribute, transmit, display, or perform any content from this website without prior written permission from Studio Auriana.
          </p>
        </section>

        {/* User Conduct */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">7. User Conduct</h2>
          <p className="mb-4">
            You agree not to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use the website for any illegal purpose or in violation of any laws</li>
            <li>Harass, abuse, or threaten other users or staff members</li>
            <li>Attempt to gain unauthorized access to the website</li>
            <li>Post false, misleading, or defamatory content</li>
            <li>Engage in any form of fraud or misrepresentation</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">8. Limitation of Liability</h2>
          <p>
            Studio Auriana and its owners, employees, and agents shall not be liable for any indirect, incidental, special, or 
            consequential damages arising out of or related to your use of this website or purchase of our products, including but 
            not limited to loss of profits, loss of data, or business interruption.
          </p>
        </section>

        {/* Dispute Resolution */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">9. Dispute Resolution</h2>
          <p>
            Any disputes arising out of these Terms & Conditions or your purchase shall be resolved through mutual negotiation. 
            If negotiation fails, the dispute shall be subject to arbitration or legal proceedings as applicable under Indian law.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">10. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit 
            to the exclusive jurisdiction of the courts located in India.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms & Conditions, please contact us:
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
