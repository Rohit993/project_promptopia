import React from "react";
import Link from "next/link";

export const Form = ({ type, post, setPost, submitted, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            className="form_textarea"
            placeholder="Write your prompt here..."
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
          ></textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag
            <span className="font-normal">
              (#product, #webdevelopment, #idea )
            </span>
          </span>
          <input
            value={post.tag}
            className="form_input"
            placeholder="#tag"
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm ">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange text-white rounded-full "
            type="submit"
            disabled={submitted}
          >
            {submitted ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
