using Microsoft.AspNetCore.Mvc;
using BlogApi.Models;

namespace BlogApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogPostsController : ControllerBase
    {
        private static List<BlogPost> _blogPosts = new List<BlogPost>();
        private static int _nextId = 1;

        [HttpGet]
        public ActionResult<IEnumerable<BlogPost>> GetBlogPosts()
        {
            return Ok(_blogPosts);
        }

        [HttpGet("{id}")]
        public ActionResult<BlogPost> GetBlogPost(int id)
        {
            var post = _blogPosts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }
        [HttpPost]
        public ActionResult<BlogPost> CreateBlogPost([FromBody] BlogPost blogPost)
        {
            if (blogPost == null)
            {
                return BadRequest();
            }
            blogPost.Id = _nextId++;
            blogPost.CreatedAt = DateTime.Now;
            _blogPosts.Add(blogPost);
            return CreatedAtAction(nameof(GetBlogPost), new { id = blogPost.Id }, blogPost);
        }
        [HttpDelete("{id}")]
        public ActionResult DeleteBlogPost(int id)
        {
            Console.WriteLine($"Delete request received for ID: {id}");
            var post = _blogPosts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                Console.WriteLine($"Post with ID {id} not found");
                return NotFound();
            }
            
            Console.WriteLine($"Deleting post: {post.Title}");
            _blogPosts.Remove(post);
            return NoContent();
        }
        [HttpPut("{id}")]
        public ActionResult UpdateBlogPost(int id, [FromBody] BlogPost blogPost)
        {
            var existingPost = _blogPosts.FirstOrDefault(p => p.Id == id);
            if (existingPost == null)
            {
                return NotFound();
            }
            existingPost.Title = blogPost.Title;
            existingPost.Content = blogPost.Content;
            existingPost.Category = blogPost.Category;
            existingPost.CreatedAt = DateTime.Now;
            
            return Ok(existingPost);
        }
    }
}