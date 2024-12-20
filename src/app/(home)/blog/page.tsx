'use client'

import BlogPostCard from "../../components/BlogPostCard";

export default function Home() {


  const algorithms = [
    {
      title: "Maximum Likelihood Estimation",
      description: "Visualize how MLE finds optimal parameters for probability distributions.",
      route: "/blog/mle",
      tags: ["Theory", "Machine Learning"]
    },
    {
      title: "Bayesian Inference",
      description: "Visualize how Bayesian inference updates probability distributions based on data.",
      route: "/blog/bayesian-inference",
      tags: ["Theory", "Machine Learning"]
    }
  ]
  return (
    <div className="px-6 pb-6 max-w-6xl mx-auto">
      <h1 className="text-6xl font-bold mb-4">Spencer&apos;s Blog Posts</h1>
      <p className="text-blue-500 mb-8">
        Click on a card below to explore math and machine learning concepts with visualizations, tutorials, and more!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {algorithms.map((algo) => (
          <BlogPostCard key={algo.route} {...algo} />
        ))}
      </div>
    </div>

  );
}