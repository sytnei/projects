<?php
// src/AppBundle/Entity/Document.php
namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Document
 *
 * @ORM\Table("document")
 * @ORM\Entity
 */

class Document {
	/**
	 * @var integer
	 *
	 * @ORM\Column(name="id", type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	protected $id;

	/**
	 * @var string
	 *
	 * @ORM\Column(name="name", type="string", length=255, nullable=false)
	 */
	protected $name;

	/**
	 * @var string
	 *
	 * @ORM\Column(name="slug", type="string", length=255, nullable=false)
	 */
	protected $slug;

	/**
	 *@var string
	 *@ORM\Column(name="content", type="text", nullable=true)
	 */
	private $content;

	/**
	 * @var ArrayCollection
	 * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Project", inversedBy="documents")
	 * @ORM\JoinColumn(name="project_id", referencedColumnName="id", nullable=true)
	 */
	protected $project;

	/**
	 * @ORM\Column(type="integer")
	 */
	protected $project_id;

	/**
	 * Get id
	 *
	 * @return integer
	 */
	public function getId() {
		return $this -> id;
	}

	/**
	 * Set name
	 *
	 * @param string $name
	 *
	 * @return Document
	 */
	public function setName($name) {
		$this -> name = $name;

		return $this;
	}

	/**
	 * Get name
	 *
	 * @return string
	 */
	public function getName() {
		return $this -> name;
	}

	/**
	 * Set slug
	 *
	 * @param string $slug
	 *
	 * @return Document
	 */
	public function setSlug($slug) {
		$this -> slug = $slug;

		return $this;
	}

	/**
	 * Get slug
	 *
	 * @return string
	 */
	public function getSlug() {
		return $this -> slug;
	}

	/**
	 * Set content
	 *
	 * @param string $content
	 *
	 * @return Document
	 */
	public function setContent($content) {
		$this -> content = $content;

		return $this;
	}

	/**
	 * Get content
	 *
	 * @return string
	 */
	public function getContent() {
		return $this -> content;
	}

	/**
	 * Set project
	 *
	 * @param Project $project
	 * @return Documents
	 */
	public function setProject($project) {
		if ($project === null) {
			if ($this -> project !== null) {
				$this -> project -> getDocuments() -> removeElement($this);
			}
			$this -> project = null;
		}
		else {
			//if (!$project instanceof AppBundle\Entity\Project) {
			///	throw new \InvalidArgumentException('$project must be null or instance of AppBundle\Entity\Project');
			//}
			if ($this -> project !== null) {
				$this -> project -> getDocuments() -> removeElement($this);
			}
			$this -> project = $project;
			$project -> getDocuments() -> add($this);
		}
	}

	/**
	 * Get project
	 *
	 * @return Project
	 */
	public function getProject() {
		return $this -> project;
	}

}
