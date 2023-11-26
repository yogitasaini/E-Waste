import React, { useState } from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{
              marginTop: "10%",
              marginLeft: "10%",
              width: "500px",
              borderRadius: "28px",
            }}
          />
        </div>
        <div className="col-md-4">
          <p
            className="text-justify mt-2"
            style={{ marginTop: "10%", marginLeft: "15%" }}
          >
            Privacy Policy [RUNEWASTE] is committed to protecting the privacy
            and security of our customers and visitors to our website. This
            policy explains how we collect, use, and safeguard personal
            information. Information We Collect We collect personal information
            that you provide to us, such as your name, email address, phone
            number, and payment information. We also collect information
            automatically through the use of cookies and other tracking
            technologies.
            {showMore && (
              <>
                We may also use your information to send you marketing
                communications and to personalize your experience on our
                website. How We Share Information We do not sell or rent your
                personal information to third parties. We may share your
                information with our trusted partners and service providers in
                order to provide our services and fulfill your orders. We may
                also share information in order to comply with legal obligations
                or protect our rights. Data Retention We retain personal
                information for as long as necessary to fulfill the purposes for
                which it was collected, unless a longer retention period is
                required by law. Security We take reasonable measures to protect
                personal information from unauthorized access, use, and
                disclosure. However, no security measures are 100% effective and
                we cannot guarantee the security of your information. Your
                Rights You have the right to access, correct, and delete your
                personal information. You may also opt-out of receiving
                marketing communications from us. Please contact us using the
                information below to exercise these rights.
              </>
            )}
          </p>
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              style={{ marginLeft: "15%" }}
            >
              See More
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
