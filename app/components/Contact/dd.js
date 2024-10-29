"use client"
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Modal = ({ isOpen, onClose }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    contactNumber: Yup.string().optional(),
    description: Yup.string().required("Description is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    onClose(); // Close the modal after submission
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
          <div className="bg-white sm:w-full  max-w-lg rounded-lg p-6 z-10 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <Formik
              initialValues={{
                name: "",
                email: "",
                contactNumber: "",
                description: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <Field
                      type="text"
                      name="name"
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <Field
                      type="email"
                      name="email"
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="contactNumber" className="block mb-1">Contact Number (Optional)</label>
                    <Field
                      type="text"
                      name="contactNumber"
                      className="border border-gray-300 rounded p-2 w-full"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <Field
                      as="textarea"
                      name="description"
                      className="border border-gray-300 rounded p-2 w-full"
                      rows="4"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-7">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-gray-600 text-center mb-8">
            I'm currently open for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Contact;
